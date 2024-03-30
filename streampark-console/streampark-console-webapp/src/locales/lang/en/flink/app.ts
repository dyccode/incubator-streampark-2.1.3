/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  id: 'ID',
  appName: 'Job Name',
  searchName: 'Job Name',
  tags: 'Tags',
  owner: 'Owner',
  flinkVersion: 'Flink Version',
  duration: 'Duration',
  modifiedTime: 'Modified Time',
  runStatus: 'Status',
  releaseBuild: 'Release',
  jobType: 'Job Type',
  developmentMode: 'Development Mode',
  executionMode: 'Execution Mode',
  historyVersion: 'History Version',
  dependency: 'Dependency',
  appConf: 'Application Conf',
  resolveOrder: 'resolveOrder',
  parallelism: 'Parallelism',
  restartSize: 'Fault Restart Size',
  faultAlertTemplate: 'Fault Alert Template',
  checkPointFailureOptions: 'CheckPoint Failure Options',
  totalMemoryOptions: 'Total Memory Options',
  jmMemoryOptions: 'JM Memory Options',
  tmMemoryOptions: 'TM Memory Options',
  podTemplate: 'Kubernetes Pod Template',
  flinkCluster: 'Flink Cluster',
  yarnQueue: 'Yarn Queue',
  mavenPom: 'Maven pom',
  uploadJar: 'Upload Jar',
  useExisting: 'use existing',
  reselect: 'reselect',
  kubernetesNamespace: 'Kubernetes Namespace',
  kubernetesClusterId: 'Kubernetes ClusterId',
  kubernetesCluster: 'Kubernetes Cluster',
  flinkBaseDockerImage: 'Flink Base Docker Image',
  restServiceExposedType: 'Rest-Service Exposed Type',
  resourceFrom: 'Resource From',
  uploadJobJar: 'Upload Job Jar',
  mainClass: 'Program Main',
  project: 'Project',
  module: 'Module',
  appType: 'Application Type',
  programArgs: 'Program Args',
  programJar: 'Program Jar',
  dynamicProperties: 'Dynamic Properties',
  hadoopConfigTitle: 'System Hadoop Configuration',
  dragUploadTitle: 'Click or drag jar to this area to upload',
  dragUploadTip:
    'Support for a single upload. You can upload a local jar here to support for current Job',
  dependencyError: 'please set flink version first.',
  status: 'Run Status',
  startTime: 'Start Time',
  endTime: 'End Time',
  runState: {
    added: 'ADDED',
    initializing: 'INITIALIZING',
    created: 'CREATED',
    starting: 'STARTING',
    restarting: 'RESTARTING',
    running: 'RUNNING',
    failing: 'FAILING',
    failed: 'FAILED',
    lost: 'LOST',
    cancelling: 'CANCELLING',
    canceled: 'CANCELED',
    finished: 'FINISHED',
    suspended: 'SUSPENDED',
    reconciling: 'RECONCILING',
    mapping: 'MAPPING',
    silent: 'SILENT',
    terminated: 'TERMINATED',
  },
  releaseState: {
    failed: 'FAILED',
    success: 'SUCCESS',
    waiting: 'WAITING',
    releasing: 'RELEASING',
    pending: 'PENDING',
  },
  clusterState: {
    created: 'CREATED',
    started: 'STARTED',
    canceled: 'SHUTDOWN',
    lost: 'LOST',
  },
  release: {
    releaseTitle: 'The current release of the job is in progress.',
    releaseDesc: 'are you sure you want to force another build',
    releaseFail: 'release job failed,',
    releasing: 'Current job is releasing',
  },
  detail: {
    detailTitle: 'Job Info',
    flinkWebUi: 'Flink Web UI',
    compareConfig: 'Compare Config',
    compareFlinkSql: 'Compare Flink SQL',
    candidate: 'Candidate',
    compare: 'Compare',
    compareSelectTips: 'Please select the target version',
    resetApi: 'Rest Api',
    resetApiToolTip:
      'Rest API external call interface,other third-party systems easy to access StreamPark',
    copyStartcURL: 'Copy Start cURL',
    copyCancelcURL: 'Copy Cancel cURL',
    apiDocCenter: 'Api Doc Center',
    nullAccessToken: 'access token is null,please contact the administrator to add.',
    invalidAccessToken: 'access token is invalid,please contact the administrator.',
    detailTab: {
      detailTabName: {
        option: 'Option',
        configuration: 'Configuration',
        flinkSql: 'Flink SQL',
        savepoint: 'Savepoint',
        backup: 'Backup',
        operationLog: 'Operation Log',
      },
      configDetail: 'View Config Detail',
      sqlDetail: 'View SQL Detail',
      confDeleteTitle: 'Are you sure delete this record?',
      sqlDeleteTitle: 'Are you sure delete this sql?',
      confBackupTitle: 'Are you sure delete this backup?',
      operationLogDeleteTitle: 'Are you sure delete this operation log?',
      copyPath: 'Copy Path',
      pointDeleteTitle: 'Are you sure delete?',
      copySuccess: 'copied to clipboard successfully',
      copyFail: 'failed',
      check: 'Check Point',
      save: 'Save Point',
      exception: 'View Exception',
    },
    different: {
      original: 'Original version',
      target: 'Target version',
    },
    exceptionModal: {
      title: 'Exception Info',
    },
  },
  view: {
    buildTitle: 'Job releasing Progress',
    stepTitle: 'Steps Detail',
    errorLog: 'Error Log',
    errorSummary: 'Error Summary',
    errorStack: 'Error Stack',
    logTitle: 'Start Log : Job Name [ {0} ]',
    refreshTime: 'last refresh time',
    refresh: 'refresh',
    start: 'Start Job',
    stop: 'Stop Job',
    savepoint: 'Trigger Savepoint',
    fromSavepoint: 'From savepoint',
    savepointTip: 'Restore the job from savepoint or latest checkpoint',
    savepointInput: 'Specify the savepoint/checkpoint path',
    savepointSwitch:
      'Specify the savepoint/checkpoint path (Double-click to switch between "input" and "select")',
    ignoreRestored: 'Ignore failed',
    ignoreRestoredTip:
      'ignore savepoint then cannot be restored, Same as：-allowNonRestoredState(-n)',
    recheck: 'the associated project has changed and this job need to be release',
    changed: 'the job has been updated',
  },
  pod: {
    choice: 'Choice',
    init: 'Init Content',
    host: 'Host Alias',
  },
  flinkSql: {
    preview: 'Preview',
    verify: 'Verify',
    format: 'Format',
    fullScreen: 'Full Screen',
    exit: 'Exit',
    successful: 'Verification success',
    compare: 'Compare',
    version: 'Version',
    compareFlinkSQL: 'Compare Flink SQL',
    compareVersionPlaceholder: 'Please select the sql version to compare',
    effectiveVersion: 'effective',
    candidateVersion: 'candidate',
  },
  editStreamPark: {
    success: 'update successful',
    flinkSqlRequired: 'Flink Sql is required',
    appidCheck: 'appid can not be empty',
    sqlCheck: 'SQL check error',
  },
  operation: {
    edit: 'Edit Job',
    release: 'Release Job',
    releaseDetail: 'Releasing Progress Detail',
    start: 'Start Job',
    cancel: 'Cancel Job',
    savepoint: 'Trigger Savepoint',
    detail: 'View Detail',
    startLog: 'See Flink Start log',
    force: 'Forced Stop Job',
    copy: 'Copy Job',
    remapping: 'Remapping Job',
    deleteTip: 'Are you sure delete this job ?',
    triggerSavePoint: 'Trigger savepoint',
    enableSavePoint: 'Trigger savepoint before flink job cancel',
    customSavepoint: 'Specify savepoint path to cancel the job ',
    enableDrain: 'Send MAX_WATERMARK before taking the savepoint and stopping the pipeline',
    invalidSavePoint: 'Custom savepoint path invalid: ',
    canceling: 'The current job is canceling',
    starting: 'The current job is starting',
  },
  dashboard: {
    availableTaskSlots: 'Available Task Slots',
    taskSlots: 'Task Slots',
    taskManagers: 'Task Managers',
    runningJobs: 'Running Jobs',
    totalTask: 'Total Task',
    runningTask: 'Running Task',
    jobManagerMemory: 'JobManager Memory',
    totalJobManagerMemory: 'Total JobManager Mem',
    taskManagerMemory: 'TaskManager Memory',
    totalTaskManagerMemory: 'Total TaskManager Mem',
  },
  runStatusOptions: {
    added: 'ADDED',
    starting: 'STARTING',
    running: 'RUNNING',
    failed: 'FAILED',
    canceled: 'CANCELED',
    finished: 'FINISHED',
    suspended: 'SUSPENDED',
    lost: 'LOST',
    silent: 'SILENT',
    terminated: 'TERMINATED',
  },
  addAppTips: {
    developmentModePlaceholder: 'please select job type',
    developmentModeIsRequiredMessage: 'Job Type is required',
    executionModePlaceholder: 'please select execution mode',
    executionModeIsRequiredMessage: 'Execution Mode is required',
    hadoopEnvInitMessage:
      'Hadoop environment initialization failed, please check the environment settings',
    resourceFromMessage: 'resource from is required',
    mainClassPlaceholder: 'Please enter Main class',
    mainClassIsRequiredMessage: 'Program Main is required',
    projectPlaceholder: 'Please select Project',
    projectIsRequiredMessage: 'Project is required',
    projectModulePlaceholder: 'Please select module of this project',
    appTypePlaceholder: 'Please select Application type',
    appTypeIsRequiredMessage: 'Application Type is required',
    programJarIsRequiredMessage: 'Program Jar is required',
    useSysHadoopConf: 'Use System Hadoop Conf',
    flinkVersionIsRequiredMessage: 'Flink Version is required',
    appNamePlaceholder: 'Please enter job Name',
    appNameIsRequiredMessage: 'The job Name is required',
    appNameNotUniqueMessage: 'The job Name is already exists, must be unique. ',
    appNameExistsInYarnMessage:
      'The job name is already exists in YARN, cannot be repeated. Please check',
    appNameExistsInK8sMessage:
      'The job name is already exists in Kubernetes,cannot be repeated. Please check',
    flinkClusterIsRequiredMessage: 'Flink Cluster is required',
    flinkSqlIsRequiredMessage: 'Flink SQL is required',
    tagsPlaceholder: 'Please enter tags,if more than one, separate them with commas(,)',
    parallelismPlaceholder: 'The parallelism with which to run the program',
    slotsOfPerTaskManagerPlaceholder: 'Number of slots per TaskManager',
    restartSizePlaceholder: 'restart max size',
    alertTemplatePlaceholder: 'Alert Template',
    totalMemoryOptionsPlaceholder: 'Please select the resource parameters to set',
    tmPlaceholder: 'Please select the resource parameters to set',
    yarnQueuePlaceholder: 'Please enter yarn queue label',
    descriptionPlaceholder: 'Please enter description for this job',
    serviceAccountPlaceholder: 'Please enter kubernetes service-account, e.g: default',
    kubernetesNamespacePlaceholder: 'Please enter kubernetes Namespace, e.g: default',
    kubernetesClusterIdPlaceholder: 'Please enter Kubernetes clusterId',
    appNameValid: 'The job name is invalid',
    appNameRole: 'The job name is invalid',
    K8sSessionClusterIdRole: 'The K8s clusterId must follow the following rules:',
    appNameK8sClusterIdRole:
      'The current deployment mode is K8s Application mode, and the job name will be used as the clusterId in K8s. Therefore, the job name must follow the following rules:',
    appNameK8sClusterIdRoleLength: 'must be no more than 45 characters',
    appNameK8sClusterIdRoleRegexp:
      'must only contain lowercase alphanumeric characters and "-"，The required format is [a-z]([-a-z0-9]*[a-z0-9])',
    appNameRoleContent:
      'must be (Chinese or English or "-" or "_"), two consecutive spaces cannot appear.Please check',
    kubernetesClusterIdIsRequiredMessage: 'Kubernetes clusterId is required',
    flinkImagePlaceholder:
      'Please enter the tag of Flink base docker image, such as: flink:1.13.0-scala_2.11-java8',
    flinkImageIsRequiredMessage: 'Flink Base Docker Image is required',
    k8sRestExposedTypePlaceholder: 'kubernetes.rest-service.exposed.type',
    hadoopXmlConfigFileTips:
      'Automatically copy configuration files from system environment parameters',
    dynamicPropertiesPlaceholder:
      '$key=$value,If there are multiple parameters,you can new line enter them (-D <arg>)',
  },
  noteInfo: {
    note: 'Note',
    minute: 'minute',
    count: 'count',
    officialDoc: 'official document',
    checkPointFailureOptions: 'CheckPoint Failure Options',
    checkpointFailureRateInterval: 'checkpoint failure rate interval',
    maxFailuresPerInterval: 'max failures per interval',
    checkPointFailureNote:
      'Operation after checkpoint failure, e.g: Within 5 minutes (checkpoint failure rate interval), if the number of checkpoint failures reaches 10 (max failures per interval),action will be triggered(alert or restart job)',
    totalMemoryNote:
      'Explicitly configuring both "total process memory" and "total Flink memory" is not recommended. It may lead to deployment failures due to potential memory configuration conflicts. Configuring other memory components also requires caution as it can produce further configuration conflicts, The easiest way is to set "total process memory"',
    dynamicProperties:
      'It works the same as -D$property=$value in CLI mode, Allows specifying multiple generic configuration options. The available options can be found from',
    yarnQueue:
      'It\'s used to quickly specify not only "yarn.application.name" but also "yarn.application.node-label". For example, "queue1" represents the value of "yarn.application.name" is "queue1", but "queue1{\'@\'}label1,label2" represents that the value of "yarn.application.name" is "queue1" and the value of "yarn.application.node-label" is "label1,label2". The queue and label are joined by {\'@\'}.',
  },
};