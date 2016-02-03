import $ from 'jquery';
import d3 from 'd3';

import epoch from 'epoch-charting';
import 'epoch-charting/dist/css/epoch.min.css!';
import 'assets/css/styles.css!';

import Activities from 'src/Activities';
 
/**
 * Developer Relations Meter
 *
 * Determine if the activities that are being undertaken,
 * or that are planned to be undertaken, suggest the
 * practition of Evangelism or Advocacy.
 */
class DevRelOMeter {
  constructor() {
    this.createActivities();
    
    this._gauge = this.createGaugeChart();
    this._pie = this.createPieChart();
    
    $('input[type=checkbox]').change(this.handleCheckStateChange.bind(this));
  }
  
  /**
   * Add the activity checkboxes to the UI.
   */
  createActivities() {
    let activities = $('#activities');
    Activities.forEach(activity => {
      activities.append(`<li><label><input type="checkbox" data-label="${activity.name}" /> ${activity.name}</label></li>`);
    });
  }
  
  /**
   * Create Epoch Gauge chart.
   */
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
  
  /**
   * Create the Epoch Pie chart.
   */
  createPieChart() {
    return $('#pie').epoch({
      type: 'pie',
      data: [{
        label: '?',
        value: 1
      }]
    });
  }
  
  /**
   * Handle an activity checkbox check state change
   * and update the charts.
   */
  handleCheckStateChange() {
    let checked = $('input[type=checkbox]:checked');
    let checkedCount = checked.length;
    
    let aaarrrs = this.calcAaarrrpCount(checked);
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
    
    // console.log('Evangelism:', percentEvangelism);
    // console.log('Advocacy:', percentAdvocacy);
    
    // Create a fake percentage to move the Gauge needle.
    // TODO: consider a better UI representation
    let fakeGaugePercent = 0;
    if(percentEvangelism >= percentAdvocacy) {
      fakeGaugePercent = 0.25;
    }
    else if(percentEvangelism < percentAdvocacy) {
      fakeGaugePercent = 0.75;
    }
    
    if(fakeGaugePercent !== this._gauge.value) {
      this._gauge.update(fakeGaugePercent);
    }
  }
  
  /** 
   * Work AAARRRP indicators count based on the activities
   * that have been selected.
   *
   * @param {object} checked jQuery list of checkboxes
   *
   * @example
   * // returns {activation: 2, product: 2, acquisition: 1}
   * calcAaarrrpCount(["library dev", "Writing Docs"])
   */
  calcAaarrrpCount(checked) {
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
  
  /**
   * Based on all the AAARRRPs calculate the percentage of
   * the total which are within the `checkedFor` array.
   *
   * @example
   * // returns 0.66
   * getPercentFor({awareness: 2, activation: 1}, ['awareness'])
   */
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
