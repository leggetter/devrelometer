import $ from 'jquery';
import d3 from 'd3';

import epoch from 'epoch-charting';
import 'epoch-charting/dist/css/epoch.min.css!';

import Activities from 'src/Activities';
 
class DevRelOMeter {
  constructor() {
    this.createActivities();
    this._checkboxCount = Activities.length;
    this._acquisitionCount = Activities.filter(a => {
      return a.aaarrrps.indexOf('acquisition') != -1;
    }).length;
    
    this.activityAAARRRPs = {};
    Activities.forEach(act => {
      act.aaarrrps.forEach(aaa => {
        if(!this.activityAAARRRPs[aaa]) {
          this.activityAAARRRPs[aaa] = 0;
        }
        ++this.activityAAARRRPs[aaa];
      })
    });
    console.log(this.activityAAARRRPs);
    
    this._gauge = this.createGaugeChart();
    this._pie = this.createPieChart();
    
    $('input[type=checkbox]').change(this.handleChecked.bind(this));
  }
  
  createActivities() {
    let activities = $('#activities');
    Activities.forEach(activity => {
      activities.append(`<li><label><input type="checkbox" data-label="${activity.name}" /> ${activity.name}</label></li>`);
    });
  }
  
  createGaugeChart() {
    return $('#gaugeChart').epoch({
      type: 'time.gauge',
      value: 0,
      format: function(v) {
        var label = 'None';
        if(v >= 0.5) {
          label = "Advocacy";
        }
        else if(v > 0) {
          label ='Evangelism';
        }
        
        return label;
      }
    });
  }
  
  createPieChart() {
    return $('#pie').epoch({
      type: 'pie',
      data: [{
        label: '?',
        value: 1
      }]
    });
  }
  
  handleChecked() {
    let checked = $('input[type=checkbox]:checked');
    let checkedCount = checked.length;
    
    let aaarrrs = this.calcAaarrrCount(checked);
    let pieData = [];
    Object.keys(aaarrrs).forEach(name => {
      pieData.push({label: `${name} (${aaarrrs[name]})`, value: aaarrrs[name]});
    });
    
    // console.log(pieData);
    this._pie.update(pieData);
    
    // if awareness and acquisition is a priority it's Evangelism
    // if - in addition - product, activation and retention are hight it's Advocacy
    let percentEvangelism = this.getPercentFor(aaarrrs, ['awareness', 'acquisition']);
    let percentAdvocacy = this.getPercentFor(aaarrrs, ['product', 'activation', 'retention']);
    
    console.log('Evangelism:', percentEvangelism);
    console.log('Advocacy:', percentAdvocacy);
    
    let fakeGaugePercent = 0.75; // hope for advocacy
    if(percentEvangelism > percentAdvocacy) {
      fakeGaugePercent = 0.25;
    }
    
    if(fakeGaugePercent !== this._gauge.value) {
      this._gauge.update(fakeGaugePercent);
    }
  }
  
  calcAaarrrCount(checked) {
    let aaarrrs = {};
    
    checked.each((index, input) => {
      let name = input.getAttribute('data-label');
      let activity = Activities.find(a => {
        return a.name === name;
      });
      
      activity.aaarrrps.forEach(ar => {
        if(!aaarrrs[ar]) {
          aaarrrs[ar] = 0;
        }
        ++aaarrrs[ar];
      })  
    });
    
    return aaarrrs;
  }
  
  getPercentFor(aaarrrs, checkFor) {
    var total = 0;
    Object.keys(aaarrrs).forEach(ar => {
      total += aaarrrs[ar];
    });
    
    let checkedTotal = 0;
    checkFor.forEach(toCheck => {
      if(aaarrrs[toCheck]) {
        checkedTotal += aaarrrs[toCheck];
      }
    });
    return parseFloat((checkedTotal/total).toFixed(2));
  }
  
}

export default DevRelOMeter;
