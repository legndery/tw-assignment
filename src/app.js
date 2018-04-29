const CommandLineComponent = require('./components/commandline.component');
const Conference = require('./components/conference.component');
const InputParser=require('./utils/LectureParser');
const ActivityController = require('./controllers/activity.controller');
const TrackController = require('./controllers/track.controller');
const Models = {
    activity: require('./models/activity.model'),
    track: require('./models/track.model')
};
const Scheduler = require('./services/scheduling.service');
//start the APP
const cli = new CommandLineComponent(process.argv);
cli.commander((options)=>{ //has data and file

    options.ActivityController = ActivityController;
    options.Models = Models;
    options.InputParser = InputParser;
    options.Scheduler = Scheduler;
    options.TrackController = TrackController;
    const conference = new Conference(options);
    conference.schedule();
    console.log(conference.toString());
});
