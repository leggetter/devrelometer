import Activity from './Activity';

const Activities = [
  new Activity('Writing docs', ['acquisition', 'activation', 'product']),
  new Activity('Library dev', ['activation', 'product']),
  new Activity('Quick start apps', ['activation', 'product']),
  new Activity('Blog posts', ['awareness', 'acquisition', 'activation', 'retention']),
  new Activity('Sponsor events', ['awareness', 'acquisition']),
  new Activity('Give talks', ['awareness', 'acquisition']),
  new Activity('Answer support queries', ['activation', 'retention', 'product']),
  new Activity('Support pre-sales', ['acquisition', 'activation']),
  new Activity('Dedicated forum', ['activation', 'retention']),
  new Activity('Alpha/Beta programme', ['retention', 'product']),
  new Activity('Office hours', ['activation', 'retention']),
  new Activity('Capture developer feedback', ['retention', 'product']),
  new Activity('Help with recruitment', ['awareness'])
];

export default Activities;
