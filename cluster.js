// Include the cluster module
var cluster = require('cluster');
var worker;

// Code to run if we're in the master process
if (cluster.isMaster) {

  // Count the machine's cpu
  var cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i++) {
  	worker = cluster.fork();
  	console.log('Worker --' + i + '----');
  	console.log(worker);
  }
  console.log('-------------------');
  console.log(cluster);
  
  // Listen for dying workers
	cluster.on('exit', function (worker) {
    // Replace the dead worker,
    // we're not sentimental
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();

	});

// Code to run if we're in a worker process
} else {
  require('./app.js');
}
