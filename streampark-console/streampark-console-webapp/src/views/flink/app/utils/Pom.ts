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

export function toPomString(pom) {
  const groupId = pom.groupId;
  const artifactId = pom.artifactId;
  const version = pom.version;
  const classifier = pom.classifier;
  const exclusions = pom.exclusions || [];
  let exclusionString = '';
  let classifierString = '';
  if (exclusions.length > 0) {
    exclusions.forEach((item) => {
      exclusionString +=
        '      <exclusion>\n' +
        '        <groupId>' +
        item.groupId +
        '</groupId>\n' +
        '        <artifactId>' +
        item.artifactId +
        '</artifactId>\n' +
        '      </exclusion>\n';
    });
    exclusionString = '    <exclusions>\n' + exclusionString + '    </exclusions>\n';
  }

  if (classifier != null) {
    classifierString = '    <classifier>' + classifier + '</classifier>\n';
  }

  const pomString =
    '  <dependency>\n' +
    '    <groupId>' +
    groupId +
    '</groupId>\n' +
    '    <artifactId>' +
    artifactId +
    '</artifactId>\n' +
    '    <version>' +
    version +
    '</version>\n' +
    classifierString +
    exclusionString +
    '  </dependency>';

  return pomString;
}