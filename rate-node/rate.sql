/*
Navicat MySQL Data Transfer

Source Server         : 我的链接
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : rate

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-12-10 15:23:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `class_info`
-- ----------------------------
DROP TABLE IF EXISTS `class_info`;
CREATE TABLE `class_info` (
  `class_id` varchar(255) NOT NULL DEFAULT '',
  `room_number` varchar(255) DEFAULT NULL,
  `teacher_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class_info
-- ----------------------------
INSERT INTO `class_info` VALUES ('1604A', '34409', '1');

-- ----------------------------
-- Table structure for `indent`
-- ----------------------------
DROP TABLE IF EXISTS `indent`;
CREATE TABLE `indent` (
  `indentid` varchar(255) NOT NULL DEFAULT '',
  `indentname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`indentid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indent
-- ----------------------------
INSERT INTO `indent` VALUES ('1', '超级管理员');
INSERT INTO `indent` VALUES ('2', '辅导员');

-- ----------------------------
-- Table structure for `limit`
-- ----------------------------
DROP TABLE IF EXISTS `limit`;
CREATE TABLE `limit` (
  `limitid` varchar(255) NOT NULL DEFAULT '',
  `api_path` varchar(255) DEFAULT NULL,
  `api_method` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`limitid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of limit
-- ----------------------------
INSERT INTO `limit` VALUES ('1', '/users/addTeacher', 'POST');
INSERT INTO `limit` VALUES ('2', '/users/test', 'GET');

-- ----------------------------
-- Table structure for `limt_indent_relation`
-- ----------------------------
DROP TABLE IF EXISTS `limt_indent_relation`;
CREATE TABLE `limt_indent_relation` (
  `relationid` varchar(255) NOT NULL DEFAULT '',
  `indentid` varchar(255) DEFAULT NULL,
  `limitid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`relationid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of limt_indent_relation
-- ----------------------------
INSERT INTO `limt_indent_relation` VALUES ('1', '1', '1');
INSERT INTO `limt_indent_relation` VALUES ('2', '2', '1');
INSERT INTO `limt_indent_relation` VALUES ('3', '1', '2');

-- ----------------------------
-- Table structure for `student_info`
-- ----------------------------
DROP TABLE IF EXISTS `student_info`;
CREATE TABLE `student_info` (
  `student_id` varchar(255) NOT NULL DEFAULT '',
  `class_id` varchar(255) DEFAULT NULL,
  `teacher_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_info
-- ----------------------------
INSERT INTO `student_info` VALUES ('163231000419', '1604A', '1');

-- ----------------------------
-- Table structure for `student_rate_info`
-- ----------------------------
DROP TABLE IF EXISTS `student_rate_info`;
CREATE TABLE `student_rate_info` (
  `rate_id` varchar(255) NOT NULL DEFAULT '',
  `student_id` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `rate_time` date DEFAULT NULL,
  `rate_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rate_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_rate_info
-- ----------------------------
INSERT INTO `student_rate_info` VALUES ('1', '163231000419', '1604A', 'all=100&1=10&2=10', '2018-11-29', '一');

-- ----------------------------
-- Table structure for `teacher_info`
-- ----------------------------
DROP TABLE IF EXISTS `teacher_info`;
CREATE TABLE `teacher_info` (
  `teacher_id` varchar(255) NOT NULL DEFAULT '',
  `teacher_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher_info
-- ----------------------------
INSERT INTO `teacher_info` VALUES ('6f9c0420-f3a1-11e8-a769-27a798f686de', '易航');
INSERT INTO `teacher_info` VALUES ('6f9cc770-f3a1-11e8-a769-27a798f686de', '王韬涛');
INSERT INTO `teacher_info` VALUES ('6f9cc771-f3a1-11e8-a769-27a798f686de', '丁少山');
INSERT INTO `teacher_info` VALUES ('390e6990-f435-11e8-baae-57957c8cc42f', '王堤');
INSERT INTO `teacher_info` VALUES ('04337ff0-f438-11e8-853e-5fe273f4c51a', '任育梁');
INSERT INTO `teacher_info` VALUES ('16739f60-f474-11e8-97ab-6105e9deef39', '胡均');
INSERT INTO `teacher_info` VALUES ('5a4aea90-f46a-11e8-97ab-6105e9deef39', '刘于');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userid` varchar(255) NOT NULL DEFAULT '',
  `username` varchar(255) DEFAULT NULL,
  `userpwd` varchar(255) DEFAULT NULL,
  `indentid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('admin', 'admin', 'admin', '*');
