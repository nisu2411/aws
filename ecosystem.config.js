module.exports = {
  apps : [{
    name   : "nodeApp",
    script : "./index.js",
    out_file: "/dev/null",
    error_file: "/dev/null",
    instances: 0,
    exec_mode: "cluster"
  }]
}
