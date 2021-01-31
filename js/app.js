class Role {
    constructor({
      docs = false, 
      apiDefinitions = false,
      libsSDKs = false,
      sampleCode = false,
      blogPosts = false,
      videoTutorials = false,
      liveStreams = false,
      eventTalks = false
    }) {
      this.docs = docs
      this.apiDefinitions = apiDefinitions
      this.libsSDKs = libsSDKs
      this.sampleCode = sampleCode
      this.blogPosts = blogPosts
      this.videoTutorials = videoTutorials
      this.liveStreams = liveStreams
      this.eventTalks = eventTalks
    }

    static activityList() {
        return [
            'Documentation',
            'API Definitions',
            'Libraries & SDKs',
            'Sample Code',
            'Blog Posts',
            'Video Tutorials',
            'Live Streams',
            'Events: Talks'
        ]
    }
    
    toArray() {
      return [
        this.boolToInt(this.docs),
        this.boolToInt(this.apiDefinitions),
        this.boolToInt(this.libsSDKs),
        this.boolToInt(this.sampleCode),
        this.boolToInt(this.blogPosts),
        this.boolToInt(this.videoTutorials),
        this.boolToInt(this.liveStreams),
        this.boolToInt(this.eventTalks)
      ]
    }
    
    boolToInt(val) {
      return val === false? 0 : 1
    }
  }
  
  const evangelist = new Role({
    blogPosts: true,
    videoTutorials: true,
    liveStreams: true,
    eventTalks: true
  })
  const advocate = new Role({
    docs: true,
    apiDefinitions: true,
    libsSDKs: true,
    sampleCode: true,
    blogPosts: true,
    videoTutorials: true,
    liveStreams: true,
    eventTalks: true
  })
  const communityManager = new Role({
    blogPosts: true,
    eventTalks: true
  })
  const educator = new Role({
    docs: true,
    sampleCode: true,
    blogPosts: true,
    videoTutorials: true,
    liveStreams: true
  })
  const experienceEngineer = new Role({
    docs: true,
    apiDefinitions: true,
    libsSDKs: true,
    sampleCode: true,
    blogPosts: true,
  })
  
  anychart.onDocumentReady(function() {
    // create polar chart
    var chart = anychart.polar();
  
    // create data set on our data
    chartData = {
      title: 'Developer Relations: Roles',
      header: ['#'].concat(Role.activityList()),
      rows: [
        ['Developer Advocate'].concat(advocate.toArray()),
        ['Developer Evangelist'].concat(evangelist.toArray()),
        ['Community Manager'].concat(communityManager.toArray()),
        ['Developer Educator'].concat(educator.toArray()),
        ['Developer Experience Engineer'].concat(experienceEngineer.toArray())
      ]
    };

    console.log(chartData.rows)
  
    // sort data by X
    chart.sortPointsByX(true)
      // set series type
      .defaultSeriesType('column')
      // disable y-axis
      .yAxis(false)
      // set x-scale
      .xScale('ordinal');
  
    // set chart data
    chart.data(chartData);
  
    // set title margin
    // chart.title().margin().bottom(10);
  
    // set stack mod
    chart.yScale().stackMode('value');
  
    // set tooltip settings
    chart.tooltip()
      .displayMode('union');
  
    // set chart container id
    chart.container('container');
    // initiate chart drawing
    chart.draw();

    var legend = chart.legend()
    legend.enabled(true)
    legend.fontWeight(600)
    legend.position('right')
    legend.padding().left(50)

    console.log(legend)
    legend.itemsLayout('vertical-expandable');

    // Series object:
    // https://api.anychart.com/v8/anychart.core.SeriesBase#category-specific-settings

    legend.listen("legendItemClick", function(e) {
        const series = chart.getSeriesAt(e.itemIndex)
        console.log(series.color())

        var selected = series.meta("selected");
        if (!selected) {
            series.legendItem().fontWeight(100)
        } else {
            series.legendItem().fontWeight(600)
        }
        series.meta("selected", !selected);
    })
    
  });