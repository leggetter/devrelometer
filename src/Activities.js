import Activity from './Activity';

const Activities = [
  new Activity('Write documenation', ['acquisition', 'activation', 'product']),
  new Activity('Developer libraries', ['activation', 'product']),
  new Activity('Create Quickstart apps', ['activation', 'product']),
  new Activity('Write Blog posts', ['awareness', 'acquisition', 'activation', 'retention']),
  new Activity('Run Webinars', ['awareness', 'acquisition', 'activation', 'retention']),
  new Activity('Sponsor events', ['awareness', 'acquisition']),
  new Activity('Give talks', ['awareness', 'acquisition']),
  new Activity('Answer support queries', ['activation', 'retention', 'product']),
  new Activity('Support pre-sales', ['acquisition', 'activation']),
  new Activity('Monitor dedicated forum', ['activation', 'retention']),
  new Activity('Run Alpha/Beta programme', ['retention', 'product']),
  new Activity('Run office hours', ['activation', 'retention']),
  new Activity('Capture developer feedback', ['retention', 'product']),
  new Activity('Help with recruitment', ['awareness'])
];

export default Activities;
