##simple-node-cluster

A simple example of running clusters on NodeJS.

Benchmarking:

brew install homebrew/apache/ab

After install ab, run the following command:

Run single process

	node app.js

After run the ab benchmark

	ab -c 350 -n 2000 -r http://localhost:3000/ > benchmark-single.txt

Run cluster

	node cluster.js

Run benchmark again

	ab -c 350 -n 2000 -r http://localhost:3000/ > benchmark-cluster.txt

You can compare results based on the benchmark

Sources:
*http://adventuresincoding.com/2012/05/how-to-get-apachebenchab-to-work-on-mac-os-x-lion