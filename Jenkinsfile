def config = [:]
config.sonarScan = true

withContainers('build', config) {
  buildInfo = stage_scm()
  stage_sonarScan(config, buildInfo)
}
