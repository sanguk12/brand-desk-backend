-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: basic
-- ------------------------------------------------------
-- Server version	5.5.5-10.7.3-MariaDB-1:10.7.3+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cms_category`
--

DROP TABLE IF EXISTS `cms_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(200) NOT NULL COMMENT '이름',
  `parent_id` int(11) DEFAULT NULL COMMENT '상위 카테고리 ID',
  `type_id` int(11) DEFAULT NULL COMMENT '분류 유형',
  `child_ids` text DEFAULT NULL COMMENT '모든 하위 카테고리 ID',
  `tag_type_ids` text DEFAULT NULL COMMENT '태그 분류',
  `code` varchar(50) NOT NULL COMMENT '코드',
  `template_path` varchar(255) DEFAULT NULL COMMENT '템플릿 경로',
  `path` varchar(1000) DEFAULT NULL COMMENT '홈 경로',
  `only_url` tinyint(1) NOT NULL COMMENT '외부 링크',
  `has_static` tinyint(1) NOT NULL COMMENT '정적 임',
  `url` varchar(1000) DEFAULT NULL COMMENT '홈 주소',
  `content_path` varchar(1000) DEFAULT NULL COMMENT '콘텐츠 경로',
  `contain_child` tinyint(1) NOT NULL DEFAULT 1 COMMENT '하위 카테고리 콘텐츠 포함',
  `page_size` int(11) DEFAULT NULL COMMENT '페이지 당 데이터 수',
  `allow_contribute` tinyint(1) NOT NULL COMMENT '제출 허용',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '순서',
  `hidden` tinyint(1) NOT NULL COMMENT '숨김 여부',
  `disabled` tinyint(1) NOT NULL COMMENT '삭제 여부',
  `extend_id` int(11) DEFAULT NULL COMMENT '확장 ID',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cms_category_code` (`site_id`,`code`),
  KEY `cms_category_sort` (`sort`),
  KEY `cms_category_type_id` (`type_id`,`allow_contribute`),
  KEY `cms_category_site_id` (`site_id`,`parent_id`,`hidden`,`disabled`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='분류';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_category`
--

LOCK TABLES `cms_category` WRITE;
/*!40000 ALTER TABLE `cms_category` DISABLE KEYS */;
INSERT INTO `cms_category` VALUES (1,1,'111',NULL,NULL,'3',NULL,'111',NULL,'111',0,0,NULL,NULL,0,20,0,0,0,0,NULL,NULL,NULL),(2,1,'22',NULL,NULL,NULL,'','222',NULL,'22',0,0,'22',NULL,0,20,0,0,0,0,NULL,NULL,NULL),(3,1,'33',1,NULL,NULL,'','33',NULL,'33',0,0,'33',NULL,0,20,0,0,0,0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cms_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_category_attribute`
--

DROP TABLE IF EXISTS `cms_category_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_category_attribute` (
  `category_id` int(11) NOT NULL COMMENT '카테고리 ID',
  `title` varchar(80) DEFAULT NULL COMMENT '제목',
  `keywords` varchar(100) DEFAULT NULL COMMENT '키워드',
  `description` varchar(300) DEFAULT NULL COMMENT '설명',
  `list_attribute` varchar(500) DEFAULT NULL COMMENT '콘텐츠 목록 노출 속성',
  `list_cate_attribute` varchar(500) DEFAULT NULL,
  `data` longtext DEFAULT NULL COMMENT '데이터 JSON',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='분류 확장';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_category_attribute`
--

LOCK TABLES `cms_category_attribute` WRITE;
/*!40000 ALTER TABLE `cms_category_attribute` DISABLE KEYS */;
INSERT INTO `cms_category_attribute` VALUES (2,'','','','','',NULL,NULL,NULL),(3,'','','','','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `cms_category_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_category_model`
--

DROP TABLE IF EXISTS `cms_category_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_category_model` (
  `category_id` int(11) NOT NULL COMMENT '카테고리 ID',
  `model_id` varchar(20) NOT NULL COMMENT '모델 코드',
  `template_path` varchar(200) DEFAULT NULL COMMENT '콘텐츠 템플릿 경로',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`category_id`,`model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='분류 모델';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_category_model`
--

LOCK TABLES `cms_category_model` WRITE;
/*!40000 ALTER TABLE `cms_category_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_category_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_category_type`
--

DROP TABLE IF EXISTS `cms_category_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_category_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `code` varchar(50) NOT NULL COMMENT '코드',
  `sort` int(11) NOT NULL COMMENT '정렬',
  `extend_id` int(11) DEFAULT NULL COMMENT '확장 ID',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_category_type_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='분류 유형';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_category_type`
--

LOCK TABLES `cms_category_type` WRITE;
/*!40000 ALTER TABLE `cms_category_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_category_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_comment`
--

DROP TABLE IF EXISTS `cms_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `reply_id` bigint(20) DEFAULT NULL COMMENT '응답 ID',
  `reply_user_id` bigint(20) DEFAULT NULL COMMENT '사용자 ID 회신',
  `replies` int(11) NOT NULL DEFAULT 0 COMMENT '답글',
  `content_id` bigint(20) NOT NULL COMMENT '기사 내용',
  `check_user_id` bigint(20) DEFAULT NULL COMMENT '검사자',
  `check_date` datetime DEFAULT NULL COMMENT '검토 날짜',
  `update_date` datetime DEFAULT NULL COMMENT '업데이트 날짜',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `status` int(11) NOT NULL COMMENT '상태：1. 출시 2. 검토 예정',
  `disabled` tinyint(1) NOT NULL COMMENT '비활성화',
  `text` text DEFAULT NULL COMMENT '내용',
  PRIMARY KEY (`id`),
  KEY `cms_comment_site_id` (`site_id`,`content_id`,`status`,`disabled`),
  KEY `cms_comment_update_date` (`update_date`,`create_date`),
  KEY `cms_comment_reply_id` (`site_id`,`reply_user_id`,`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='논평';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_comment`
--

LOCK TABLES `cms_comment` WRITE;
/*!40000 ALTER TABLE `cms_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_content`
--

DROP TABLE IF EXISTS `cms_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_content` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `title` varchar(255) NOT NULL COMMENT '제목',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 게시',
  `check_user_id` bigint(20) DEFAULT NULL COMMENT '검사자',
  `category_id` int(11) NOT NULL COMMENT '분류',
  `model_id` varchar(20) NOT NULL COMMENT '모델',
  `parent_id` bigint(20) DEFAULT NULL COMMENT '부모 콘텐츠 ID',
  `quote_content_id` bigint(20) DEFAULT NULL COMMENT '참조 콘텐츠 ID',
  `copied` tinyint(1) NOT NULL COMMENT '복사여부',
  `contribute` tinyint(1) NOT NULL DEFAULT 0 COMMENT '제출 여부',
  `author` varchar(50) DEFAULT NULL COMMENT '저자',
  `editor` varchar(50) DEFAULT NULL COMMENT '편집자',
  `only_url` tinyint(1) NOT NULL COMMENT '외부 링크',
  `has_images` tinyint(1) NOT NULL COMMENT '자신의 사진 목록',
  `has_files` tinyint(1) NOT NULL COMMENT '자신의 첨부 파일 목록',
  `has_static` tinyint(1) NOT NULL COMMENT '정적 임',
  `url` varchar(1000) DEFAULT NULL COMMENT '주소',
  `description` varchar(1000) DEFAULT NULL COMMENT '소개',
  `tag_ids` text DEFAULT NULL COMMENT '상표',
  `dictionary_values` text DEFAULT NULL COMMENT '데이터 사전 값',
  `cover` varchar(255) DEFAULT NULL COMMENT '겉표지',
  `childs` int(11) NOT NULL COMMENT '하위 콘텐츠 수',
  `scores` int(11) NOT NULL COMMENT 'Score',
  `comments` int(11) NOT NULL COMMENT '댓글 수',
  `clicks` int(11) NOT NULL COMMENT '조회수',
  `site_comments` varchar(100) DEFAULT NULL,
  `publish_date` datetime NOT NULL COMMENT '출시일',
  `expiry_date` datetime DEFAULT NULL COMMENT '만료일',
  `check_date` datetime DEFAULT NULL COMMENT '검토 날짜',
  `update_date` datetime DEFAULT NULL COMMENT '업데이트 날짜',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '순서',
  `status` int(11) NOT NULL COMMENT '상태：0, 초안 1, 게시 됨 2, 검토 대기 중',
  `disabled` tinyint(1) NOT NULL COMMENT '삭제 여부',
  PRIMARY KEY (`id`),
  KEY `cms_content_check_date` (`check_date`,`update_date`),
  KEY `cms_content_scores` (`scores`,`comments`,`clicks`),
  KEY `cms_content_only_url` (`only_url`,`has_images`,`has_files`,`user_id`),
  KEY `cms_content_status` (`site_id`,`status`,`category_id`,`disabled`,`model_id`,`parent_id`,`sort`,`publish_date`,`expiry_date`),
  KEY `cms_content_quote_content_id` (`site_id`,`quote_content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='내용';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_content`
--

LOCK TABLES `cms_content` WRITE;
/*!40000 ALTER TABLE `cms_content` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_content_attribute`
--

DROP TABLE IF EXISTS `cms_content_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_content_attribute` (
  `content_id` bigint(20) NOT NULL,
  `source` varchar(50) DEFAULT NULL COMMENT '콘텐츠 출처',
  `source_url` varchar(1000) DEFAULT NULL COMMENT '출처 주소',
  `data` longtext DEFAULT NULL COMMENT '데이터 JSON',
  `search_text` longtext DEFAULT NULL COMMENT '전체 텍스트 인덱싱 된 텍스트',
  `text` longtext DEFAULT NULL COMMENT '내용',
  `word_count` int(11) NOT NULL COMMENT '단어 수',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='콘텐츠 확장';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_content_attribute`
--

LOCK TABLES `cms_content_attribute` WRITE;
/*!40000 ALTER TABLE `cms_content_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_content_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_content_file`
--

DROP TABLE IF EXISTS `cms_content_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_content_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content_id` bigint(20) NOT NULL COMMENT '내용',
  `user_id` bigint(20) NOT NULL COMMENT '사용자',
  `file_path` varchar(255) NOT NULL COMMENT '파일 경로',
  `file_type` varchar(20) NOT NULL COMMENT '파일 유형',
  `file_size` bigint(20) NOT NULL COMMENT '파일 크기',
  `width` int(11) DEFAULT NULL COMMENT '넓이',
  `height` int(11) DEFAULT NULL COMMENT '높이',
  `clicks` int(11) NOT NULL COMMENT '조회수',
  `sort` int(11) NOT NULL COMMENT '정렬',
  `description` varchar(300) DEFAULT NULL COMMENT '설명',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_content_file_content_id` (`content_id`),
  KEY `cms_content_file_sort` (`sort`),
  KEY `cms_content_file_file_type` (`file_type`),
  KEY `cms_content_file_file_size` (`file_size`),
  KEY `cms_content_file_clicks` (`clicks`),
  KEY `cms_content_file_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='콘텐츠 첨부';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_content_file`
--

LOCK TABLES `cms_content_file` WRITE;
/*!40000 ALTER TABLE `cms_content_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_content_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_content_related`
--

DROP TABLE IF EXISTS `cms_content_related`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_content_related` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content_id` bigint(20) NOT NULL COMMENT '내용',
  `related_content_id` bigint(20) DEFAULT NULL COMMENT '추천 콘텐츠',
  `user_id` bigint(20) NOT NULL COMMENT '추천 사용자',
  `url` varchar(1000) DEFAULT NULL COMMENT '추천 링크 주소',
  `title` varchar(255) DEFAULT NULL COMMENT '추천 제목',
  `description` varchar(300) DEFAULT NULL COMMENT '추천 소개',
  `sort` int(11) NOT NULL COMMENT '정렬',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_content_related_user_id` (`content_id`,`related_content_id`,`user_id`,`sort`),
  KEY `cms_content_related_related_content_id` (`related_content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='추천';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_content_related`
--

LOCK TABLES `cms_content_related` WRITE;
/*!40000 ALTER TABLE `cms_content_related` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_content_related` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_dictionary`
--

DROP TABLE IF EXISTS `cms_dictionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_dictionary` (
  `id` varchar(20) NOT NULL,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(100) NOT NULL COMMENT '이름',
  `multiple` tinyint(1) NOT NULL COMMENT '다중 선택 허용',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`,`site_id`),
  KEY `cms_dictionary_site_id` (`site_id`,`multiple`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사전';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_dictionary`
--

LOCK TABLES `cms_dictionary` WRITE;
/*!40000 ALTER TABLE `cms_dictionary` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_dictionary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_dictionary_data`
--

DROP TABLE IF EXISTS `cms_dictionary_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_dictionary_data` (
  `dictionary_id` varchar(20) NOT NULL COMMENT '사전',
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `value` varchar(50) NOT NULL COMMENT '값',
  `text` varchar(100) NOT NULL COMMENT '본문',
  `sort` int(11) NOT NULL COMMENT '정렬 순서',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`dictionary_id`,`site_id`,`value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사전 데이터';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_dictionary_data`
--

LOCK TABLES `cms_dictionary_data` WRITE;
/*!40000 ALTER TABLE `cms_dictionary_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_dictionary_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_extend_file`
--

DROP TABLE IF EXISTS `cms_extend_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_extend_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content_id` bigint(20) DEFAULT NULL COMMENT '콘텐츠 아이디',
  `field_name` varchar(255) DEFAULT NULL COMMENT '필드 이름',
  `user_id` bigint(20) NOT NULL COMMENT '사용자',
  `file_path` varchar(255) NOT NULL COMMENT '파일 경로',
  `file_name` varchar(255) NOT NULL COMMENT '원본 파일 이름',
  `file_type` varchar(20) NOT NULL COMMENT '파일 유형',
  `file_size` bigint(20) NOT NULL COMMENT '파일 크기',
  `width` int(11) DEFAULT NULL COMMENT '넓이',
  `height` int(11) DEFAULT NULL COMMENT '높이',
  `clicks` int(11) NOT NULL COMMENT '조회수',
  `sort` int(11) NOT NULL COMMENT '정렬',
  `description` varchar(300) DEFAULT NULL COMMENT '설명',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_content_file_sort` (`sort`),
  KEY `cms_content_file_file_type` (`file_type`),
  KEY `cms_content_file_file_size` (`file_size`),
  KEY `cms_content_file_clicks` (`clicks`),
  KEY `cms_content_file_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='콘텐츠 확장 컬럼 첨부';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_extend_file`
--

LOCK TABLES `cms_extend_file` WRITE;
/*!40000 ALTER TABLE `cms_extend_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_extend_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_place`
--

DROP TABLE IF EXISTS `cms_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_place` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `path` varchar(100) NOT NULL COMMENT '템플릿 경로',
  `user_id` bigint(20) DEFAULT NULL COMMENT '사용자 제출',
  `check_user_id` bigint(20) DEFAULT NULL COMMENT '검사자',
  `item_type` varchar(50) DEFAULT NULL COMMENT '추천 아이템 유형',
  `item_id` bigint(20) DEFAULT NULL COMMENT '추천 아이템 ID',
  `title` varchar(255) NOT NULL COMMENT '제목',
  `url` varchar(1000) DEFAULT NULL COMMENT '하이퍼 링크',
  `cover` varchar(255) DEFAULT NULL COMMENT '표지 사진',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `publish_date` datetime NOT NULL COMMENT '출시일',
  `expiry_date` datetime DEFAULT NULL COMMENT '만료일',
  `status` int(11) NOT NULL COMMENT '상태：0, 프런트에서 제출 1, 출시 ',
  `clicks` int(11) NOT NULL COMMENT '조회수',
  `disabled` tinyint(1) NOT NULL COMMENT '비활성화',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_place_clicks` (`clicks`),
  KEY `cms_place_site_id` (`site_id`,`path`,`status`,`disabled`),
  KEY `cms_place_item_type` (`item_type`,`item_id`),
  KEY `cms_place_user_id` (`user_id`,`check_user_id`),
  KEY `cms_place_publish_date` (`publish_date`,`create_date`,`expiry_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='페이지 데이터';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_place`
--

LOCK TABLES `cms_place` WRITE;
/*!40000 ALTER TABLE `cms_place` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_place_attribute`
--

DROP TABLE IF EXISTS `cms_place_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_place_attribute` (
  `place_id` bigint(20) NOT NULL COMMENT '위치 ID',
  `data` longtext DEFAULT NULL COMMENT '데이터 JSON',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='권장 비트 데이터 확장';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_place_attribute`
--

LOCK TABLES `cms_place_attribute` WRITE;
/*!40000 ALTER TABLE `cms_place_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_place_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_tag`
--

DROP TABLE IF EXISTS `cms_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `type_id` int(11) DEFAULT NULL COMMENT '카테고리 ID',
  `search_count` int(11) NOT NULL COMMENT '검색 횟수',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_tag_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='상표';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_tag`
--

LOCK TABLES `cms_tag` WRITE;
/*!40000 ALTER TABLE `cms_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_tag_type`
--

DROP TABLE IF EXISTS `cms_tag_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_tag_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `count` int(11) NOT NULL COMMENT '태그 수',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_tag_type_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='태그 유형';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_tag_type`
--

LOCK TABLES `cms_tag_type` WRITE;
/*!40000 ALTER TABLE `cms_tag_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_tag_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_user_score`
--

DROP TABLE IF EXISTS `cms_user_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_user_score` (
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `item_type` varchar(50) NOT NULL COMMENT '유형',
  `item_id` bigint(20) NOT NULL COMMENT '프로젝트 ID',
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`user_id`,`item_type`,`item_id`),
  KEY `cms_user_score_item_type` (`item_type`,`item_id`,`create_date`),
  KEY `cms_user_score_user_id` (`user_id`,`create_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사용자 평가 양식';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_user_score`
--

LOCK TABLES `cms_user_score` WRITE;
/*!40000 ALTER TABLE `cms_user_score` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_user_score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_user_vote`
--

DROP TABLE IF EXISTS `cms_user_vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_user_vote` (
  `vote_id` bigint(20) NOT NULL COMMENT '투표 ID',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `item_id` bigint(20) NOT NULL COMMENT '투표 옵션',
  `ip` varchar(130) NOT NULL COMMENT 'IP',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`user_id`,`vote_id`),
  KEY `cms_user_vote_vote_id` (`vote_id`,`ip`,`create_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='투표 사용자';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_user_vote`
--

LOCK TABLES `cms_user_vote` WRITE;
/*!40000 ALTER TABLE `cms_user_vote` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_user_vote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_vote`
--

DROP TABLE IF EXISTS `cms_vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_vote` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `start_date` datetime NOT NULL COMMENT '시작일',
  `end_date` datetime DEFAULT NULL COMMENT '종료일',
  `scores` int(11) NOT NULL COMMENT '총 투표',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `description` varchar(300) DEFAULT NULL COMMENT '설명',
  `create_date` datetime NOT NULL,
  `disabled` tinyint(1) NOT NULL COMMENT '비활성화',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_vote_site_id` (`site_id`,`start_date`,`disabled`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='투표';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_vote`
--

LOCK TABLES `cms_vote` WRITE;
/*!40000 ALTER TABLE `cms_vote` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_vote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_vote_item`
--

DROP TABLE IF EXISTS `cms_vote_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_vote_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `vote_id` bigint(20) NOT NULL COMMENT '투표',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `scores` int(11) NOT NULL COMMENT '투표',
  `sort` int(11) NOT NULL COMMENT '순서',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `cms_vote_item_vote_id` (`vote_id`,`scores`,`sort`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='투표 선택';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_vote_item`
--

LOCK TABLES `cms_vote_item` WRITE;
/*!40000 ALTER TABLE `cms_vote_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_vote_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_word`
--

DROP TABLE IF EXISTS `cms_word`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_word` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트',
  `name` varchar(100) NOT NULL COMMENT '이름',
  `search_count` int(11) NOT NULL COMMENT '검색 횟수',
  `hidden` tinyint(1) NOT NULL COMMENT '숨김 여부',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cms_word_name` (`name`,`site_id`),
  KEY `cms_word_hidden` (`hidden`),
  KEY `cms_word_create_date` (`create_date`),
  KEY `cms_word_search_count` (`search_count`),
  KEY `cms_word_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='검색어';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_word`
--

LOCK TABLES `cms_word` WRITE;
/*!40000 ALTER TABLE `cms_word` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_word` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_word_related`
--

DROP TABLE IF EXISTS `cms_word_related`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_word_related` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL,
  `name` varchar(100) NOT NULL,
  `related` text NOT NULL,
  `create_date` datetime NOT NULL,
  `sort` smallint(6) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cms_word_related_name_site_id_idx` (`name`,`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_word_related`
--

LOCK TABLES `cms_word_related` WRITE;
/*!40000 ALTER TABLE `cms_word_related` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_word_related` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_word_synonym`
--

DROP TABLE IF EXISTS `cms_word_synonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_word_synonym` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(100) NOT NULL,
  `synonym` text NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cms_word_synonym_name_site_id_idx` (`name`,`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_word_synonym`
--

LOCK TABLES `cms_word_synonym` WRITE;
/*!40000 ALTER TABLE `cms_word_synonym` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_word_synonym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_login`
--

DROP TABLE IF EXISTS `log_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_login` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '사용자 이름',
  `user_id` bigint(20) DEFAULT NULL COMMENT '사용자 ID',
  `ip` varchar(130) NOT NULL COMMENT 'IP',
  `channel` varchar(50) NOT NULL COMMENT '로그인 채널',
  `result` tinyint(1) NOT NULL COMMENT '결과',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `error_password` varchar(100) DEFAULT NULL COMMENT '잘못된 비밀번호',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `log_login_result` (`result`),
  KEY `log_login_user_id` (`user_id`),
  KEY `log_login_create_date` (`create_date`),
  KEY `log_login_ip` (`ip`),
  KEY `log_login_site_id` (`site_id`),
  KEY `log_login_channel` (`channel`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COMMENT='로그인 로그';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_login`
--

LOCK TABLES `log_login` WRITE;
/*!40000 ALTER TABLE `log_login` DISABLE KEYS */;
INSERT INTO `log_login` VALUES (1,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-01 09:45:54',NULL,NULL),(2,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-01 09:47:01',NULL,NULL),(3,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-01 10:38:05',NULL,NULL),(4,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-01 10:44:26',NULL,NULL),(5,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-01 13:00:07',NULL,NULL),(6,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-01 14:30:06',NULL,NULL),(7,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-05 10:07:19',NULL,NULL),(8,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-06 14:48:45',NULL,NULL),(9,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-06 16:07:05',NULL,NULL),(10,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-07 08:27:18',NULL,NULL),(11,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-08 12:12:57',NULL,NULL),(12,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-08 13:41:08',NULL,NULL),(13,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-08 13:42:00',NULL,NULL),(14,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-08 15:00:21',NULL,NULL),(15,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-08 15:04:05',NULL,NULL),(16,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-08 16:56:47',NULL,NULL),(17,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 08:27:34',NULL,NULL),(18,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 09:02:04',NULL,NULL),(19,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 09:48:27',NULL,NULL),(20,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 09:51:59',NULL,NULL),(21,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 13:58:08',NULL,NULL),(22,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 13:58:11',NULL,NULL),(23,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 15:19:15',NULL,NULL),(24,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 16:02:45',NULL,NULL),(25,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 16:31:02',NULL,NULL),(26,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-12 17:53:58',NULL,NULL),(27,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 07:55:14',NULL,NULL),(28,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 10:26:23',NULL,NULL),(29,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 12:20:12',NULL,NULL),(30,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 12:20:30',NULL,NULL),(31,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 14:01:17',NULL,NULL),(32,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 14:01:57',NULL,NULL),(33,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 14:02:18',NULL,NULL),(34,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 14:02:59',NULL,NULL),(35,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 14:04:09',NULL,NULL),(36,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 16:09:09',NULL,NULL),(37,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 16:09:09',NULL,NULL),(38,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 17:20:19',NULL,NULL),(39,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-13 17:56:44',NULL,NULL),(40,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-14 14:58:00',NULL,NULL),(41,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-14 15:02:58',NULL,NULL),(42,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-14 16:10:21',NULL,NULL),(43,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-14 17:11:04',NULL,NULL),(44,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-14 17:53:02',NULL,NULL),(45,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-18 09:21:16',NULL,NULL),(46,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-18 10:25:15',NULL,NULL),(47,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-18 10:46:18',NULL,NULL),(48,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-18 10:51:43',NULL,NULL),(49,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-18 11:42:07',NULL,NULL),(50,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 06:13:10',NULL,NULL),(51,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 06:15:32',NULL,NULL),(52,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 08:00:39',NULL,NULL),(53,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 08:23:08',NULL,NULL),(54,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 11:22:29',NULL,NULL),(55,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 11:58:37',NULL,NULL),(56,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 12:11:29',NULL,NULL),(57,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-19 16:17:47',NULL,NULL),(58,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 08:03:45',NULL,NULL),(59,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 08:04:26',NULL,NULL),(60,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 09:23:05',NULL,NULL),(61,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 10:18:55',NULL,NULL),(62,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 11:03:04',NULL,NULL),(63,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 11:33:16',NULL,NULL),(64,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 14:36:07',NULL,NULL),(65,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 14:36:07',NULL,NULL),(66,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-20 15:14:24',NULL,NULL),(67,1,'admin',1,'127.0.0.1','web_manager',1,'2021-10-25 10:36:17',NULL,NULL),(68,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 15:35:08',NULL,NULL),(69,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:14:49',NULL,NULL),(70,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:14:54',NULL,NULL),(71,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:16:46',NULL,NULL),(72,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:18:31',NULL,NULL),(73,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:18:54',NULL,NULL),(74,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:19:05',NULL,NULL),(75,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-30 16:21:01',NULL,NULL),(76,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-31 07:52:46',NULL,NULL),(77,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-31 09:00:57',NULL,NULL),(78,1,'admin',1,'127.0.0.1','web_manager',1,'2022-03-31 10:26:32',NULL,NULL),(79,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-05 08:45:50',NULL,NULL),(80,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-05 09:05:36',NULL,NULL),(81,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-05 09:54:06',NULL,NULL),(82,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-05 10:12:30',NULL,NULL),(83,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-08 10:10:30',NULL,NULL),(84,1,'admin',1,'127.0.0.1','web_manager',0,'2022-04-12 05:34:01','123456',NULL),(85,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 05:34:24',NULL,NULL),(86,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 07:52:07',NULL,NULL),(87,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 07:52:07',NULL,NULL),(88,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 09:29:36',NULL,NULL),(89,1,'vben',NULL,'127.0.0.1','web_manager',0,'2022-04-12 09:29:56','123456',NULL),(90,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 09:29:59',NULL,NULL),(91,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 11:16:21',NULL,NULL),(92,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-12 11:20:27',NULL,NULL),(93,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-13 06:31:08',NULL,NULL),(94,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-13 06:57:39',NULL,NULL),(95,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-13 07:09:38',NULL,NULL),(96,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-13 07:09:45',NULL,NULL),(97,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 08:24:34',NULL,'2022-04-14 08:24:34'),(98,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 08:32:58',NULL,'2022-04-14 08:32:58'),(99,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 10:51:59',NULL,'2022-04-14 10:51:59'),(100,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 10:54:14',NULL,'2022-04-14 10:54:14'),(101,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 11:24:44',NULL,'2022-04-14 11:24:44'),(102,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 11:25:34',NULL,'2022-04-14 11:25:34'),(103,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 11:25:45',NULL,'2022-04-14 11:25:45'),(104,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 11:26:06',NULL,'2022-04-14 11:26:06'),(105,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 11:26:08',NULL,'2022-04-14 11:26:08'),(106,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 11:26:52',NULL,'2022-04-14 11:26:52'),(107,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-14 16:19:16',NULL,'2022-04-14 16:19:16'),(108,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-15 07:26:07',NULL,'2022-04-15 07:26:07'),(109,1,'admin',1,'127.0.0.1','web_manager',1,'2022-04-15 07:44:16',NULL,'2022-04-15 07:44:16');
/*!40000 ALTER TABLE `log_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_operate`
--

DROP TABLE IF EXISTS `log_operate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_operate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `user_id` bigint(20) DEFAULT NULL COMMENT '사용자 ID',
  `channel` varchar(50) NOT NULL COMMENT '운영 채널',
  `operate` varchar(40) NOT NULL COMMENT '운영',
  `ip` varchar(130) DEFAULT NULL COMMENT 'IP',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `content` text NOT NULL COMMENT '내용',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `log_operate_user_id` (`user_id`),
  KEY `log_operate_operate` (`operate`),
  KEY `log_operate_create_date` (`create_date`),
  KEY `log_operate_ip` (`ip`),
  KEY `log_operate_site_id` (`site_id`),
  KEY `log_operate_channel` (`channel`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COMMENT='작업 로그';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_operate`
--

LOCK TABLES `log_operate` WRITE;
/*!40000 ALTER TABLE `log_operate` DISABLE KEYS */;
INSERT INTO `log_operate` VALUES (1,1,1,'web_manager','save.configData','127.0.0.1','2021-10-01 09:46:46','{\r\n  \"id\" : {\r\n    \"code\" : \"cors\"\r\n  }\r\n}',NULL),(2,1,1,'web_manager','update.configData','127.0.0.1','2021-10-01 09:48:11','{\r\n  \"id\" : {\r\n    \"code\" : \"cors\"\r\n  }\r\n}',NULL),(3,1,1,'web_manager','update.module','127.0.0.1','2021-10-05 10:25:48','{\r\n  \"id\" : \"content_uncheck\",\r\n  \"siteId\" : null,\r\n  \"url\" : null,\r\n  \"authorizedUrl\" : \"cmsContent/uncheck\",\r\n  \"attached\" : \"\",\r\n  \"parentId\" : \"content_menu\",\r\n  \"menu\" : false,\r\n  \"sort\" : 0\r\n}',NULL),(4,1,1,'web_manager','update.module','127.0.0.1','2021-10-05 10:26:18','{\r\n  \"id\" : \"content_recycle_recycle\",\r\n  \"siteId\" : null,\r\n  \"url\" : null,\r\n  \"authorizedUrl\" : \"cmsContent/recycle\",\r\n  \"attached\" : null,\r\n  \"parentId\" : \"content_recycle_list\",\r\n  \"menu\" : false,\r\n  \"sort\" : 0\r\n}',NULL),(5,1,1,'web_manager','createDirectory.web.webfile','127.0.0.1','2021-10-08 15:04:11','//dsfds',NULL),(6,1,1,'web_manager','unzip.web.webfile','127.0.0.1','2021-10-08 15:04:36','//dsfds/psqlodbc_13_02_0000.zip',NULL),(7,1,1,'web_manager','delete.web.webfile','127.0.0.1','2021-10-08 15:05:02','//dsfds/psqlodbc-setup.exe,//dsfds/psqlodbc_13_02_0000.zip,//dsfds/README.txt',NULL),(8,1,1,'web_manager','delete.web.webfile','127.0.0.1','2021-10-08 15:05:08','//dsfds',NULL),(9,1,1,'web_manager','delete.web.webfile','127.0.0.1','2021-10-08 15:07:05','//form01.xls',NULL),(10,1,1,'web_manager','save.module','127.0.0.1','2021-10-12 17:57:03','{\r\n  \"id\" : \"ㄴㅇㄹㄴㅇ\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"32432432\",\r\n  \"authorizedUrl\" : \"32423\\n32423\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 0,\r\n  \"renewal\" : false,\r\n  \"sort\" : 0\r\n}',NULL),(11,1,1,'web_manager','save.module','127.0.0.1','2021-10-12 17:59:05','{\r\n  \"id\" : \"312312\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"21312\",\r\n  \"authorizedUrl\" : \"12312\",\r\n  \"icon\" : \"ant-design:aliwangwang-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 0,\r\n  \"renewal\" : false,\r\n  \"sort\" : 0\r\n}',NULL),(12,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 09:22:45','{\r\n  \"id\" : \"ㄴㅇㄹㄴㅇ\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"32432432\",\r\n  \"authorizedUrl\" : \"32423\\n32423\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : \"312312\",\r\n  \"menu\" : false,\r\n  \"status\" : 0,\r\n  \"renewal\" : false,\r\n  \"sort\" : 0\r\n}',NULL),(13,1,1,'web_manager','save.module','127.0.0.1','2021-10-13 09:25:16','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : null,\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : null,\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 1,\r\n  \"renewal\" : false,\r\n  \"sort\" : 11\r\n}',NULL),(14,1,1,'web_manager','save.module','127.0.0.1','2021-10-13 09:26:01','{\r\n  \"id\" : \"12121\",\r\n  \"siteId\" : null,\r\n  \"url\" : null,\r\n  \"authorizedUrl\" : \"11\",\r\n  \"icon\" : null,\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 1,\r\n  \"renewal\" : false,\r\n  \"sort\" : 11\r\n}',NULL),(15,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 09:32:21','{\r\n  \"id\" : \"312312\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"21312\",\r\n  \"authorizedUrl\" : \"12312\",\r\n  \"icon\" : \"ant-design:aliwangwang-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 2,\r\n  \"renewal\" : false,\r\n  \"sort\" : 0\r\n}',NULL),(16,1,1,'web_manager','save.module','127.0.0.1','2021-10-13 09:33:31','{\r\n  \"id\" : \"3321321\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"2131\",\r\n  \"authorizedUrl\" : \"21312\",\r\n  \"icon\" : \"ant-design:account-book-filled\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 2,\r\n  \"renewal\" : false,\r\n  \"sort\" : 12312\r\n}',NULL),(17,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 10:26:56','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"dasasdas\",\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 1,\r\n  \"renewal\" : true,\r\n  \"sort\" : 11\r\n}',NULL),(18,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 10:33:05','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"dasasdas\",\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 1,\r\n  \"renewal\" : true,\r\n  \"sort\" : 11\r\n}',NULL),(19,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 10:34:19','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"dasasdas\",\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 1,\r\n  \"renewal\" : true,\r\n  \"sort\" : 11\r\n}',NULL),(20,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 10:39:10','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"dasasdas\",\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 1,\r\n  \"renewal\" : true,\r\n  \"sort\" : 11\r\n}',NULL),(21,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 10:41:44','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"dasasdas\",\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : false,\r\n  \"status\" : 2,\r\n  \"renewal\" : true,\r\n  \"sort\" : 11\r\n}',NULL),(22,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 11:05:11','{\r\n  \"id\" : \"312312\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"21312\",\r\n  \"authorizedUrl\" : \"12312\",\r\n  \"icon\" : \"ant-design:aliwangwang-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : true,\r\n  \"status\" : 2,\r\n  \"renewal\" : true,\r\n  \"sort\" : 0\r\n}',NULL),(23,1,1,'web_manager','update.module','127.0.0.1','2021-10-13 11:05:20','{\r\n  \"id\" : \"wwwww\",\r\n  \"siteId\" : null,\r\n  \"url\" : \"dasasdas\",\r\n  \"authorizedUrl\" : \"324234\",\r\n  \"icon\" : \"ant-design:account-book-outlined\",\r\n  \"parentId\" : null,\r\n  \"menu\" : true,\r\n  \"status\" : 2,\r\n  \"renewal\" : true,\r\n  \"sort\" : 11\r\n}',NULL),(24,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:34:15','{\r\n  \"id\" : 2,\r\n  \"name\" : \"fgfdg\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fdgdf\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634110455297\r\n}',NULL),(25,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:35:17','{\r\n  \"id\" : 3,\r\n  \"name\" : \"sdfsd\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 2,\r\n  \"createDate\" : 1634110517204\r\n}',NULL),(26,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:35:22','{\r\n  \"id\" : 4,\r\n  \"name\" : \"sdfsd\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634110522807\r\n}',NULL),(27,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:40:52','{\r\n  \"id\" : 5,\r\n  \"name\" : \"sdfsdaaa\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634110852541\r\n}',NULL),(28,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:41:28','{\r\n  \"id\" : 6,\r\n  \"name\" : \"rrrrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634110888848\r\n}',NULL),(29,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:42:21','{\r\n  \"id\" : 7,\r\n  \"name\" : \"rrraaaarr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634110941711\r\n}',NULL),(30,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:43:58','{\r\n  \"id\" : 8,\r\n  \"name\" : \"rrrddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634111038214\r\n}',NULL),(31,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:46:41','{\r\n  \"id\" : 9,\r\n  \"name\" : \"rrrddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634111201297\r\n}',NULL),(32,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:47:07','{\r\n  \"id\" : 10,\r\n  \"name\" : \"rrrsssddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634111227763\r\n}',NULL),(33,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:49:19','{\r\n  \"id\" : 11,\r\n  \"name\" : \"rrrddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634111359758\r\n}',NULL),(34,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:50:00','{\r\n  \"id\" : 12,\r\n  \"name\" : \"rrrsssddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634111400130\r\n}',NULL),(35,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:50:44','{\r\n  \"id\" : 12,\r\n  \"name\" : \"rrrsssddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(36,1,1,'web_manager','save.role','127.0.0.1','2021-10-13 16:51:19','{\r\n  \"id\" : 13,\r\n  \"name\" : \"rrrsssddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : 1634111479004\r\n}',NULL),(37,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:54:12','{\r\n  \"id\" : 13,\r\n  \"name\" : \"rrrsssddddrrr\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(38,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:54:22','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(39,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:54:31','{\r\n  \"id\" : 12,\r\n  \"name\" : \"22222222\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(40,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:54:49','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(41,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:55:19','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(42,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:55:58','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(43,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 16:57:05','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(44,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:23:25','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(45,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:33:04','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(46,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:33:30','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(47,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:36:29','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(48,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:36:45','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(49,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:38:24','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(50,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:38:35','{\r\n  \"id\" : 13,\r\n  \"name\" : \"111111\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(51,1,1,'web_manager','update.role','127.0.0.1','2021-10-13 17:54:30','{\r\n  \"id\" : 12,\r\n  \"name\" : \"ㅂㅂㅂㅂㅂㅂ\",\r\n  \"ownsAllRight\" : false,\r\n  \"showAllModule\" : false,\r\n  \"description\" : \"fsdsdfsd\",\r\n  \"status\" : 1,\r\n  \"createDate\" : null\r\n}',NULL),(52,1,1,'web_manager','update.template.meta','127.0.0.1','2021-10-19 06:16:36','sasa.html',NULL),(53,1,1,'web_manager','save.category','127.0.0.1','2021-10-19 06:39:19','{\r\n  \"id\" : 1,\r\n  \"name\" : \"111\",\r\n  \"parentId\" : null,\r\n  \"typeId\" : null,\r\n  \"childIds\" : null,\r\n  \"tagTypeIds\" : null,\r\n  \"code\" : \"111\",\r\n  \"onlyUrl\" : false,\r\n  \"hasStatic\" : false,\r\n  \"url\" : null,\r\n  \"containChild\" : false,\r\n  \"pageSize\" : 20,\r\n  \"allowContribute\" : false,\r\n  \"sort\" : 0,\r\n  \"hidden\" : false,\r\n  \"extendId\" : null\r\n}',NULL),(54,1,1,'web_manager','save.category','127.0.0.1','2021-10-19 06:45:58','{\r\n  \"id\" : 2,\r\n  \"name\" : \"22\",\r\n  \"parentId\" : null,\r\n  \"typeId\" : null,\r\n  \"childIds\" : null,\r\n  \"tagTypeIds\" : null,\r\n  \"code\" : \"222\",\r\n  \"onlyUrl\" : false,\r\n  \"hasStatic\" : false,\r\n  \"url\" : null,\r\n  \"containChild\" : false,\r\n  \"pageSize\" : 20,\r\n  \"allowContribute\" : false,\r\n  \"sort\" : 0,\r\n  \"hidden\" : false,\r\n  \"extendId\" : null\r\n}',NULL),(55,1,1,'web_manager','save.category','127.0.0.1','2021-10-19 06:46:07','{\r\n  \"id\" : 3,\r\n  \"name\" : \"33\",\r\n  \"parentId\" : 1,\r\n  \"typeId\" : null,\r\n  \"childIds\" : null,\r\n  \"tagTypeIds\" : null,\r\n  \"code\" : \"33\",\r\n  \"onlyUrl\" : false,\r\n  \"hasStatic\" : false,\r\n  \"url\" : null,\r\n  \"containChild\" : false,\r\n  \"pageSize\" : 20,\r\n  \"allowContribute\" : false,\r\n  \"sort\" : 0,\r\n  \"hidden\" : false,\r\n  \"extendId\" : null\r\n}',NULL),(56,1,1,'web_manager','update.dept','127.0.0.1','2021-10-19 12:07:13','{\r\n  \"id\" : 1,\r\n  \"name\" : \"Technical department\",\r\n  \"parentId\" : null,\r\n  \"description\" : \"ㄴㅇㄹㅇㄴ\",\r\n  \"userId\" : null,\r\n  \"maxSort\" : 0,\r\n  \"ownsAllCategory\" : false,\r\n  \"ownsAllPage\" : false,\r\n  \"ownsAllConfig\" : false,\r\n  \"createDate\" : null,\r\n  \"updateDate\" : 1634612833066,\r\n  \"status\" : 1\r\n}',NULL),(57,1,1,'web_manager','update.dept','127.0.0.1','2021-10-19 12:07:41','{\r\n  \"id\" : 1,\r\n  \"name\" : \"Technical department\",\r\n  \"parentId\" : null,\r\n  \"description\" : \"ㄴㅇㄹㅇㄴ\",\r\n  \"userId\" : null,\r\n  \"maxSort\" : 0,\r\n  \"ownsAllCategory\" : false,\r\n  \"ownsAllPage\" : false,\r\n  \"ownsAllConfig\" : false,\r\n  \"createDate\" : null,\r\n  \"updateDate\" : 1634612861455,\r\n  \"status\" : 1\r\n}',NULL),(58,1,1,'web_manager','update.dept','127.0.0.1','2021-10-19 12:08:22','{\r\n  \"id\" : 1,\r\n  \"name\" : \"Technical department\",\r\n  \"parentId\" : null,\r\n  \"description\" : \"ㄴㅇㄹㅇㄴ\",\r\n  \"userId\" : null,\r\n  \"maxSort\" : 0,\r\n  \"ownsAllCategory\" : false,\r\n  \"ownsAllPage\" : false,\r\n  \"ownsAllConfig\" : false,\r\n  \"createDate\" : null,\r\n  \"updateDate\" : 1634612902953,\r\n  \"status\" : 1\r\n}',NULL),(59,1,1,'web_manager','update.dept','127.0.0.1','2021-10-19 12:09:03','{\r\n  \"id\" : 1,\r\n  \"name\" : \"Technical department\",\r\n  \"parentId\" : null,\r\n  \"description\" : \"ㄴㅇㄹㅇㄴ\",\r\n  \"userId\" : null,\r\n  \"maxSort\" : 0,\r\n  \"ownsAllCategory\" : false,\r\n  \"ownsAllPage\" : false,\r\n  \"ownsAllConfig\" : false,\r\n  \"createDate\" : null,\r\n  \"updateDate\" : 1634612943012,\r\n  \"status\" : 1\r\n}',NULL),(60,1,1,'web_manager','update.dept','127.0.0.1','2021-10-20 08:11:22','{\r\n  \"id\" : 1,\r\n  \"name\" : \"Technical department\",\r\n  \"parentId\" : null,\r\n  \"description\" : \"ㄴㅇㄹㅇㄴ\",\r\n  \"userId\" : null,\r\n  \"maxSort\" : 0,\r\n  \"ownsAllCategory\" : true,\r\n  \"ownsAllPage\" : true,\r\n  \"ownsAllConfig\" : true,\r\n  \"createDate\" : null,\r\n  \"updateDate\" : 1634685082892,\r\n  \"status\" : 1\r\n}',NULL),(61,1,1,'web_manager','update.user','127.0.0.1','2022-04-13 07:54:21','{\r\n  \"id\" : 1,\r\n  \"name\" : \"admin\",\r\n  \"nickName\" : \"admin\",\r\n  \"deptId\" : 1,\r\n  \"ownsAllContent\" : true,\r\n  \"roles\" : \"1\",\r\n  \"email\" : \"qudansdl@gmail.com\",\r\n  \"emailChecked\" : false,\r\n  \"superuserAccess\" : true,\r\n  \"lastLoginDate\" : 1649801385000,\r\n  \"lastLoginIp\" : \"127.0.0.1\",\r\n  \"loginCount\" : 44,\r\n  \"registeredDate\" : 1546268400000\r\n}',NULL),(62,1,1,'web_manager','update.user','127.0.0.1','2022-04-13 07:54:54','{\r\n  \"id\" : 1,\r\n  \"name\" : \"admin\",\r\n  \"nickName\" : \"admin\",\r\n  \"deptId\" : 1,\r\n  \"ownsAllContent\" : true,\r\n  \"roles\" : \"1\",\r\n  \"email\" : \"qudansdl@gmail.com\",\r\n  \"emailChecked\" : false,\r\n  \"superuserAccess\" : true,\r\n  \"lastLoginDate\" : 1649801385000,\r\n  \"lastLoginIp\" : \"127.0.0.1\",\r\n  \"loginCount\" : 44,\r\n  \"registeredDate\" : 1546268400000\r\n}',NULL);
/*!40000 ALTER TABLE `log_operate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_task`
--

DROP TABLE IF EXISTS `log_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `task_id` int(11) NOT NULL COMMENT '태스크',
  `begintime` datetime NOT NULL COMMENT '시작 시간',
  `endtime` datetime DEFAULT NULL COMMENT '종료 시간',
  `success` tinyint(1) NOT NULL COMMENT '실행 성공',
  `result` longtext DEFAULT NULL COMMENT '결과',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `log_task_task_id` (`task_id`),
  KEY `log_task_success` (`success`),
  KEY `log_task_site_id` (`site_id`),
  KEY `log_task_begintime` (`begintime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Task 로그';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_task`
--

LOCK TABLES `log_task` WRITE;
/*!40000 ALTER TABLE `log_task` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_upload`
--

DROP TABLE IF EXISTS `log_upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_upload` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `channel` varchar(50) NOT NULL COMMENT '운영 채널',
  `original_name` varchar(255) DEFAULT NULL COMMENT '원래 파일 이름',
  `file_type` varchar(20) NOT NULL COMMENT '파일 유형',
  `file_size` bigint(20) NOT NULL COMMENT '파일 크기',
  `width` int(11) DEFAULT NULL COMMENT '넓이',
  `height` int(11) DEFAULT NULL COMMENT '높이',
  `ip` varchar(130) DEFAULT NULL COMMENT 'IP',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `file_path` varchar(500) NOT NULL COMMENT '파일 경로',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `log_upload_user_id` (`user_id`),
  KEY `log_upload_create_date` (`create_date`),
  KEY `log_upload_ip` (`ip`),
  KEY `log_upload_site_id` (`site_id`),
  KEY `log_upload_channel` (`channel`),
  KEY `log_upload_file_type` (`file_type`),
  KEY `log_upload_file_size` (`file_size`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='로그 업로드';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_upload`
--

LOCK TABLES `log_upload` WRITE;
/*!40000 ALTER TABLE `log_upload` DISABLE KEYS */;
INSERT INTO `log_upload` VALUES (1,1,1,'web_manager','psqlodbc_13_02_0000.zip','other',7730594,NULL,NULL,'127.0.0.1','2021-10-08 15:04:24','//dsfds/psqlodbc_13_02_0000.zip',NULL),(2,1,1,'web_manager','form01.xls','other',19968,NULL,NULL,'127.0.0.1','2021-10-08 15:06:29','//form01.xls',NULL);
/*!40000 ALTER TABLE `log_upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_admin_auth_token`
--

DROP TABLE IF EXISTS `sys_admin_auth_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_admin_auth_token` (
  `user_id` decimal(10,0) NOT NULL,
  `auth_code` varchar(4) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `expiry_date` timestamp NULL DEFAULT NULL,
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_admin_auth_token`
--

LOCK TABLES `sys_admin_auth_token` WRITE;
/*!40000 ALTER TABLE `sys_admin_auth_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_admin_auth_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_app`
--

DROP TABLE IF EXISTS `sys_app`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `channel` varchar(50) NOT NULL COMMENT '채널',
  `app_key` varchar(50) NOT NULL COMMENT 'APP key',
  `app_secret` varchar(50) NOT NULL COMMENT 'APP secret',
  `authorized_apis` text DEFAULT NULL COMMENT '인증 API',
  `expiry_minutes` int(11) DEFAULT NULL COMMENT '만료일',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sys_app_key` (`app_key`),
  KEY `sys_app_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='신청';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_app`
--

LOCK TABLES `sys_app` WRITE;
/*!40000 ALTER TABLE `sys_app` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_app` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_app_client`
--

DROP TABLE IF EXISTS `sys_app_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_app_client` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `channel` varchar(20) NOT NULL COMMENT '채널',
  `uuid` varchar(50) NOT NULL COMMENT '고유하게 식별',
  `user_id` bigint(20) DEFAULT NULL COMMENT '사용자 바인딩',
  `client_version` varchar(50) DEFAULT NULL COMMENT '버전',
  `last_login_date` datetime DEFAULT NULL COMMENT '마지막 로그인 시간',
  `last_login_ip` varchar(130) DEFAULT NULL COMMENT '마지막 로그인 IP',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `disabled` tinyint(1) NOT NULL COMMENT '비활성화 여부',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sys_app_client_site_id` (`site_id`,`channel`,`uuid`),
  KEY `sys_app_client_user_id` (`user_id`,`disabled`,`create_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='애플리케이션 클라이언트';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_app_client`
--

LOCK TABLES `sys_app_client` WRITE;
/*!40000 ALTER TABLE `sys_app_client` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_app_client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_app_token`
--

DROP TABLE IF EXISTS `sys_app_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_app_token` (
  `auth_token` varchar(40) NOT NULL COMMENT '승인 확인',
  `app_id` int(11) NOT NULL COMMENT '앱 ID',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `expiry_date` datetime DEFAULT NULL COMMENT '만료일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`auth_token`),
  KEY `sys_app_token_app_id` (`app_id`),
  KEY `sys_app_token_create_date` (`create_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='응용 프로그램 승인';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_app_token`
--

LOCK TABLES `sys_app_token` WRITE;
/*!40000 ALTER TABLE `sys_app_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_app_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_cluster`
--

DROP TABLE IF EXISTS `sys_cluster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_cluster` (
  `uuid` varchar(40) NOT NULL COMMENT 'uuid',
  `create_date` datetime NOT NULL COMMENT '생성 시간',
  `heartbeat_date` datetime NOT NULL COMMENT 'heartbeat 시간',
  `master` tinyint(1) NOT NULL COMMENT '관리 여부',
  `cms_version` varchar(20) DEFAULT NULL COMMENT '버전',
  `revision` varchar(20) DEFAULT NULL COMMENT '개정',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  `start_date` datetime DEFAULT NULL COMMENT '시작 시간',
  PRIMARY KEY (`uuid`),
  KEY `sys_cluster_create_date` (`create_date`),
  KEY `sys_cluster_heartbeat_date` (`heartbeat_date`,`master`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='서버 클러스터';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_cluster`
--

LOCK TABLES `sys_cluster` WRITE;
/*!40000 ALTER TABLE `sys_cluster` DISABLE KEYS */;
INSERT INTO `sys_cluster` VALUES ('9b01e783-0abd-412a-84d3-402e5df80186','2022-04-15 10:01:58','2022-04-15 10:04:58',0,'V2.8.202010','c','2022-04-15 10:04:58','2022-04-15 10:01:58');
/*!40000 ALTER TABLE `sys_cluster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_config_data`
--

DROP TABLE IF EXISTS `sys_config_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_config_data` (
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `code` varchar(50) NOT NULL COMMENT '설정 항목 코드',
  `data` longtext NOT NULL COMMENT '값',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`site_id`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사이트 설정';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_config_data`
--

LOCK TABLES `sys_config_data` WRITE;
/*!40000 ALTER TABLE `sys_config_data` DISABLE KEYS */;
INSERT INTO `sys_config_data` VALUES (1,'cors','{\r\n  \"allowed_origins\" : \"*\",\r\n  \"allowed_methods\" : \"*\",\r\n  \"allowed_headers\" : \"*\",\r\n  \"exposed_headers\" : \"\",\r\n  \"allow_credentials\" : \"true\",\r\n  \"max_age\" : \"1800\"\r\n}',NULL,NULL);
/*!40000 ALTER TABLE `sys_config_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dept`
--

DROP TABLE IF EXISTS `sys_dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `parent_id` int(11) DEFAULT NULL COMMENT '상위 부서 ID',
  `description` varchar(300) DEFAULT NULL COMMENT '설명',
  `user_id` bigint(20) DEFAULT NULL COMMENT '부서장',
  `max_sort` int(11) NOT NULL DEFAULT 1000 COMMENT '최대 콘텐츠 프로모션 수준',
  `owns_all_category` tinyint(1) NOT NULL COMMENT '모든 분류 권한 보유',
  `owns_all_page` tinyint(1) NOT NULL COMMENT '모든 페이지 권한 보유',
  `owns_all_config` tinyint(1) NOT NULL DEFAULT 1 COMMENT '모든 설정 권한 보유',
  `status` tinyint(1) DEFAULT 1 COMMENT '상태',
  `create_date` timestamp NULL DEFAULT NULL COMMENT '생성일',
  `update_date` timestamp NULL DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `sys_dept_site_id` (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='부서';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dept`
--

LOCK TABLES `sys_dept` WRITE;
/*!40000 ALTER TABLE `sys_dept` DISABLE KEYS */;
INSERT INTO `sys_dept` VALUES (1,1,'Technical department',NULL,'ㄴㅇㄹㅇㄴ',NULL,0,1,1,1,1,NULL,'2021-10-20 08:11:22');
/*!40000 ALTER TABLE `sys_dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dept_category`
--

DROP TABLE IF EXISTS `sys_dept_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_dept_category` (
  `dept_id` int(11) NOT NULL COMMENT '부서 ID',
  `category_id` int(11) NOT NULL COMMENT '카테고리 ID',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`dept_id`,`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='부서 분류';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dept_category`
--

LOCK TABLES `sys_dept_category` WRITE;
/*!40000 ALTER TABLE `sys_dept_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_dept_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dept_config`
--

DROP TABLE IF EXISTS `sys_dept_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_dept_config` (
  `dept_id` int(11) NOT NULL COMMENT '부서 ID',
  `config` varchar(100) NOT NULL COMMENT '설정',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`dept_id`,`config`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='부서 설정';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dept_config`
--

LOCK TABLES `sys_dept_config` WRITE;
/*!40000 ALTER TABLE `sys_dept_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_dept_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dept_page`
--

DROP TABLE IF EXISTS `sys_dept_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_dept_page` (
  `dept_id` int(11) NOT NULL COMMENT '부서 ID',
  `page` varchar(100) NOT NULL COMMENT '페이지',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`dept_id`,`page`),
  KEY `sys_dept_page_page` (`page`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='부서 페이지';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dept_page`
--

LOCK TABLES `sys_dept_page` WRITE;
/*!40000 ALTER TABLE `sys_dept_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_dept_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_domain`
--

DROP TABLE IF EXISTS `sys_domain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_domain` (
  `name` varchar(100) NOT NULL COMMENT '도메인 이름',
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `wild` tinyint(1) NOT NULL COMMENT '와일드 카드 도메인',
  `path` varchar(100) DEFAULT NULL COMMENT '경로',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  PRIMARY KEY (`name`),
  KEY `sys_domain_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='도메인 이름';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_domain`
--

LOCK TABLES `sys_domain` WRITE;
/*!40000 ALTER TABLE `sys_domain` DISABLE KEYS */;
INSERT INTO `sys_domain` VALUES ('dev.nudejava.net',1,1,'',NULL,NULL),('localhost',1,1,'',NULL,NULL);
/*!40000 ALTER TABLE `sys_domain` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_email_token`
--

DROP TABLE IF EXISTS `sys_email_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_email_token` (
  `auth_token` varchar(40) NOT NULL COMMENT '확인 코드',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `email` varchar(100) NOT NULL COMMENT '메일 주소',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `expiry_date` datetime NOT NULL COMMENT '만료일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`auth_token`),
  KEY `sys_email_token_create_date` (`create_date`),
  KEY `sys_email_token_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='이메일 주소 확인 로그';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_email_token`
--

LOCK TABLES `sys_email_token` WRITE;
/*!40000 ALTER TABLE `sys_email_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_email_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_extend`
--

DROP TABLE IF EXISTS `sys_extend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_extend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_type` varchar(20) NOT NULL COMMENT '확장 유형',
  `item_id` int(11) NOT NULL COMMENT '확장 프로젝트 ID',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='넓히다';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_extend`
--

LOCK TABLES `sys_extend` WRITE;
/*!40000 ALTER TABLE `sys_extend` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_extend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_extend_field`
--

DROP TABLE IF EXISTS `sys_extend_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_extend_field` (
  `extend_id` int(11) NOT NULL COMMENT '확장 ID',
  `code` varchar(20) NOT NULL COMMENT '코드',
  `required` tinyint(1) NOT NULL COMMENT '필요합니까?',
  `searchable` tinyint(1) NOT NULL COMMENT '검색 가능',
  `maxlength` int(11) DEFAULT NULL COMMENT '최대 길이',
  `name` varchar(20) NOT NULL COMMENT '이름',
  `description` varchar(100) DEFAULT NULL COMMENT '설명',
  `input_type` varchar(20) NOT NULL COMMENT '입력 유형',
  `default_value` varchar(50) DEFAULT NULL COMMENT '기본값',
  `dictionary_id` varchar(20) DEFAULT NULL COMMENT '데이터 사전 ID',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '순서',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`extend_id`,`code`),
  KEY `sys_extend_field_sort` (`sort`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='확장 파일';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_extend_field`
--

LOCK TABLES `sys_extend_field` WRITE;
/*!40000 ALTER TABLE `sys_extend_field` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_extend_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_module`
--

DROP TABLE IF EXISTS `sys_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_module` (
  `id` varchar(30) NOT NULL,
  `site_id` smallint(6) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL COMMENT '링크 주소',
  `authorized_url` text DEFAULT NULL COMMENT '승인 된 주소',
  `icon` varchar(50) DEFAULT NULL COMMENT '아이콘',
  `parent_id` varchar(30) DEFAULT NULL COMMENT '부모 모듈',
  `menu` tinyint(1) NOT NULL DEFAULT 1 COMMENT '메뉴 여부',
  `sort` int(11) NOT NULL COMMENT '정렬',
  `status` int(1) DEFAULT 1,
  `renewal` tinyint(1) DEFAULT 0 COMMENT '신규 버전 여부',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  `sys_extend_field` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `sys_module_parent_id` (`parent_id`,`menu`),
  KEY `sys_module_sort` (`sort`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='모듈';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_module`
--

LOCK TABLES `sys_module` WRITE;
/*!40000 ALTER TABLE `sys_module` DISABLE KEYS */;
INSERT INTO `sys_module` VALUES ('app_add',NULL,'sysApp/add','sysApp/save',NULL,'app_list',0,0,1,0,NULL,NULL,NULL),('app_client_disable',NULL,NULL,'sysAppClient/disable',NULL,'app_client_list',0,0,1,0,NULL,NULL,NULL),('app_client_enable',NULL,NULL,'sysAppClient/enable',NULL,'app_client_list',0,0,1,0,NULL,NULL,NULL),('app_client_list',NULL,'sysAppClient/list',NULL,'icon-coffee','user_menu',1,4,1,0,NULL,NULL,NULL),('app_delete',NULL,NULL,'sysApp/delete',NULL,'app_list',0,0,1,0,NULL,NULL,NULL),('app_issue',NULL,'sysApp/issueParameters','sysAppToken/issue',NULL,'app_list',0,0,1,0,NULL,NULL,NULL),('app_list',NULL,'sysApp/list',NULL,'icon-linux','system_menu',1,5,1,0,NULL,NULL,NULL),('category',NULL,NULL,NULL,'icon-folder-open-alt',NULL,1,5,1,0,NULL,NULL,NULL),('category_add',NULL,'cmsCategory/add','cmsCategory/addMore,cmsCategory/verify,cmsTemplate/lookup,cmsCategory/categoryPath,cmsCategory/contentPath,file/doUpload,cmsCategory/save','','category_menu',0,0,1,0,NULL,NULL,NULL),('category_delete',NULL,NULL,'cmsCategory/delete','','category_menu',0,0,1,0,NULL,NULL,NULL),('category_extend',NULL,NULL,NULL,'icon-road','category',1,2,1,0,NULL,NULL,NULL),('category_menu',NULL,'cmsCategory/list',NULL,'icon-folder-open','category',1,1,1,0,NULL,NULL,NULL),('category_move',NULL,'cmsCategory/moveParameters','cmsCategory/move,cmsCategory/lookup','','category_menu',0,0,1,0,NULL,NULL,NULL),('category_publish',NULL,'cmsCategory/publishParameters','cmsCategory/publish','','category_menu',0,0,1,0,NULL,NULL,NULL),('category_push',NULL,'cmsCategory/push_page','cmsPlace/push,cmsPlace/add,cmsPlace/save','','category_menu',0,0,1,0,NULL,NULL,NULL),('category_type_add',NULL,'cmsCategoryType/add','cmsCategoryType/save',NULL,'category_type_list',0,0,1,0,NULL,NULL,NULL),('category_type_change',NULL,'cmsCategory/changeTypeParameters','cmsCategory/changeType','','category_menu',0,0,1,0,NULL,NULL,NULL),('category_type_delete',NULL,NULL,'cmsCategoryType/delete',NULL,'category_type_list',0,0,1,0,NULL,NULL,NULL),('category_type_list',NULL,'cmsCategoryType/list',NULL,'icon-road','category_extend',1,1,1,0,NULL,NULL,NULL),('clearcache',NULL,NULL,'clearCache','',NULL,0,10,1,0,NULL,NULL,NULL),('comment_check',NULL,NULL,'cmsComment/check',NULL,'comment_list',0,0,1,0,NULL,NULL,NULL),('comment_delete',NULL,NULL,'cmsComment/delete',NULL,'comment_list',0,0,1,0,NULL,NULL,NULL),('comment_edit',NULL,'cmsComment/edit','cmsComment/save',NULL,'comment_list',0,0,1,0,NULL,NULL,NULL),('comment_list',NULL,'cmsComment/list','sysUser/lookup','icon-comment','content_extend',1,4,1,0,NULL,NULL,NULL),('comment_reply',NULL,'cmsComment/reply','cmsComment/save',NULL,'comment_list',0,0,1,0,NULL,NULL,NULL),('comment_uncheck',NULL,NULL,'cmsComment/uncheck',NULL,'comment_list',0,0,1,0,NULL,NULL,NULL),('config_add',NULL,'sysConfig/add','sysConfig/save',NULL,'config_list',0,0,1,0,NULL,NULL,NULL),('config_data_delete',NULL,NULL,'sysConfigData/delete',NULL,'config_data_list',0,0,1,0,NULL,NULL,NULL),('config_data_edit',NULL,NULL,'sysConfigData/save,sysConfigData/edit',NULL,'config_data_list',0,0,1,0,NULL,NULL,NULL),('config_data_list',NULL,'sysConfigData/list',NULL,'icon-cog','system_menu',1,1,1,0,NULL,NULL,NULL),('config_delete',NULL,NULL,'sysConfig/delete',NULL,'config_list',0,0,1,0,NULL,NULL,NULL),('config_list',NULL,'sysConfig/list',NULL,'icon-cogs','config_menu',1,2,1,0,NULL,NULL,NULL),('config_list_data_dictionary',NULL,'cmsDictionary/lookup',NULL,NULL,'config_list',0,0,1,0,NULL,NULL,NULL),('config_menu',NULL,NULL,NULL,'icon-gear','develop',1,2,1,0,NULL,NULL,NULL),('content',NULL,NULL,NULL,'icon-file-text-alt',NULL,1,2,1,0,NULL,NULL,NULL),('content_add',NULL,'cmsContent/add','cmsContent/addMore,file/doUpload,cmsContent/lookup,cmsContent/lookup_list,cmsContent/save,ueditor,ckeditor/upload,kindeditor/upload,file/doBatchUpload','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_check',NULL,NULL,'cmsContent/check,cmsContent/reject','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_delete',NULL,NULL,'cmsContent/delete','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_export',NULL,NULL,'cmsContent/export','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_extend',NULL,NULL,NULL,'icon-road','content',1,1,1,0,NULL,NULL,NULL),('content_menu',NULL,'cmsContent/list','sysUser/lookup','icon-book','content',1,0,1,0,NULL,NULL,NULL),('content_move',NULL,'cmsContent/moveParameters','cmsContent/move','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_publish',NULL,NULL,'cmsContent/publish','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_push',NULL,'cmsContent/push','cmsContent/push_content,cmsContent/push_content_list,cmsContent/push_to_content,cmsContent/push_page,cmsContent/push_page_list,cmsPlace/add,cmsPlace/save,cmsContent/related,cmsContent/unrelated,cmsPlace/delete','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_recycle_delete',NULL,NULL,'cmsContent/realDelete',NULL,'content_recycle_list',0,0,1,0,NULL,NULL,NULL),('content_recycle_list',NULL,'cmsRecycleContent/list','sysUser/lookup','icon-trash','content_extend',1,3,1,0,NULL,NULL,NULL),('content_recycle_recycle',NULL,NULL,'cmsContent/recycle',NULL,'content_recycle_list',0,0,1,0,NULL,NULL,NULL),('content_refresh',NULL,NULL,'cmsContent/refresh','','content_menu',1,0,1,0,NULL,NULL,NULL),('content_select_category',NULL,'cmsCategory/lookupByModelId',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_category_type',NULL,'cmsCategoryType/lookup',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_content',NULL,'cmsContent/lookup','cmsContent/lookup_list',NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_tag',NULL,'cmsTag/lookup',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_tag_type',NULL,'cmsTagType/lookup',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_template',NULL,'cmsTemplate/lookup',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_user',NULL,'sysUser/lookup',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_select_vote',NULL,'cmsVote/lookup',NULL,NULL,'content_add',0,0,1,0,NULL,NULL,NULL),('content_sort',NULL,'cmsContent/sortParameters','cmsContent/sort','','content_menu',0,0,1,0,NULL,NULL,NULL),('content_uncheck',NULL,NULL,'cmsContent/uncheck','','content_menu',0,0,1,0,NULL,NULL,NULL),('content_view',NULL,'cmsContent/view',NULL,'','content_menu',0,0,1,0,NULL,NULL,NULL),('content_vote',NULL,'cmsVote/list',NULL,'icon-ticket','content_extend',1,4,1,0,NULL,NULL,NULL),('content_vote_add',NULL,'cmsVote/add','cmsVote/save',NULL,'content_vote',0,0,1,0,NULL,NULL,NULL),('content_vote_delete',NULL,NULL,'cmsVote/delete',NULL,'content_vote',0,0,1,0,NULL,NULL,NULL),('content_vote_view',NULL,'cmsVote/view',NULL,NULL,'content_vote',0,0,1,0,NULL,NULL,NULL),('dept_add',NULL,'sysDept/add','sysDept/lookup,sysUser/lookup,sysDept/save',NULL,'dept_list',0,0,1,0,NULL,NULL,NULL),('dept_delete',NULL,NULL,'sysDept/delete',NULL,'dept_list',0,0,1,0,NULL,NULL,NULL),('dept_list',NULL,'sysDept/list','sysDept/lookup,sysUser/lookup','icon-group','user_menu',1,2,1,0,NULL,NULL,NULL),('dept_user_list',NULL,'sysDept/userList','sysDept/addUser,sysDept/saveUser,sysDept/enableUser,sysDept/disableUser',NULL,'dept_list',0,0,1,0,NULL,NULL,NULL),('develop',NULL,NULL,NULL,'icon-puzzle-piece',NULL,1,7,1,0,NULL,NULL,NULL),('dictionary_add',NULL,'cmsDictionary/add','cmsDictionary/save,cmsDictionary/verify',NULL,'dictionary_list',0,0,1,0,NULL,NULL,NULL),('dictionary_delete',NULL,NULL,'cmsDictionary/delete',NULL,'dictionary_list',0,0,1,0,NULL,NULL,NULL),('dictionary_list',NULL,'cmsDictionary/list',NULL,'icon-book','system_menu',1,4,1,0,NULL,NULL,NULL),('domain_config',NULL,'sysDomain/config','sysDomain/saveConfig,cmsTemplate/directoryLookup,cmsTemplate/lookup',NULL,'domain_list',0,0,1,0,NULL,NULL,NULL),('domain_list',NULL,'sysDomain/domainList',NULL,'icon-qrcode','config_menu',1,3,1,0,NULL,NULL,NULL),('file_menu',NULL,NULL,NULL,'icon-folder-close-alt','develop',1,1,1,0,NULL,NULL,NULL),('log_login',NULL,'log/login','sysUser/lookup','icon-signin','log_menu',1,3,1,0,NULL,NULL,NULL),('log_login_delete',NULL,NULL,'logLogin/delete',NULL,'log_login',0,0,1,0,NULL,NULL,NULL),('log_menu',NULL,NULL,NULL,'icon-list-alt','maintenance',1,3,1,0,NULL,NULL,NULL),('log_operate',NULL,'log/operate','sysUser/lookup','icon-list-alt','log_menu',1,2,1,0,NULL,NULL,NULL),('log_operate_delete',NULL,NULL,'logOperate/delete',NULL,'log_operate',0,0,1,0,NULL,NULL,NULL),('log_operate_view',NULL,'log/operateView',NULL,NULL,'log_operate',0,0,1,0,NULL,NULL,NULL),('log_task',NULL,'log/task','sysUser/lookup','icon-time','log_menu',1,4,1,0,NULL,NULL,NULL),('log_task_delete',NULL,NULL,'logTask/delete',NULL,'log_task',0,0,1,0,NULL,NULL,NULL),('log_task_view',NULL,'log/taskView',NULL,NULL,'log_task',0,0,1,0,NULL,NULL,NULL),('log_upload',NULL,'log/upload','sysUser/lookup','icon-list-alt','log_menu',1,1,1,0,NULL,NULL,NULL),('maintenance',NULL,NULL,NULL,'icon-cogs',NULL,1,6,1,0,NULL,NULL,NULL),('model_add',NULL,'cmsModel/add','cmsModel/save,cmsTemplate/lookup',NULL,'model_list',0,0,1,0,NULL,NULL,NULL),('model_delete',NULL,NULL,'cmsModel/delete',NULL,'model_list',0,0,1,0,NULL,NULL,NULL),('model_list',NULL,'cmsModel/list',NULL,'icon-th-large','config_menu',1,1,1,0,NULL,NULL,NULL),('myself',NULL,NULL,NULL,'icon-key',NULL,1,1,1,0,NULL,NULL,NULL),('myself_content',NULL,'myself/contentList',NULL,'icon-book','myself_menu',1,1,1,0,NULL,NULL,NULL),('myself_content_add',NULL,'cmsContent/add','cmsContent/addMore,file/doUpload,cmsContent/lookup,cmsContent/lookup_list,cmsContent/save,ueditor,ckeditor/upload,kindeditor/upload',NULL,'myself_content',0,0,1,0,NULL,NULL,NULL),('myself_content_delete',NULL,NULL,'cmsContent/delete',NULL,'myself_content',0,0,1,0,NULL,NULL,NULL),('myself_content_publish',NULL,NULL,'cmsContent/publish',NULL,'myself_content',0,0,1,0,NULL,NULL,NULL),('myself_content_push',NULL,'cmsContent/push','cmsContent/push_content,cmsContent/push_content_list,cmsContent/push_to_content,cmsContent/push_page,cmsContent/push_page_list,cmsContent/push_to_place,cmsContent/related',NULL,'myself_content',0,0,1,0,NULL,NULL,NULL),('myself_content_refresh',NULL,NULL,'cmsContent/refresh',NULL,'myself_content',0,0,1,0,NULL,NULL,NULL),('myself_device',NULL,'myself/userDeviceList','sysAppClient/enable,sysAppClient/disable','icon-linux','myself_menu',1,5,1,0,NULL,NULL,NULL),('myself_log_login',NULL,'myself/logLogin',NULL,'icon-signin','myself_menu',1,4,1,0,NULL,NULL,NULL),('myself_log_operate',NULL,'myself/logOperate',NULL,'icon-list-alt','myself_menu',1,3,1,0,NULL,NULL,NULL),('myself_menu',NULL,NULL,NULL,'icon-user','myself',1,0,1,0,NULL,NULL,NULL),('myself_password',NULL,'myself/password','changePassword','icon-key','myself_menu',1,2,1,0,NULL,NULL,NULL),('myself_token',NULL,'myself/userTokenList','sysUserToken/delete','icon-unlock-alt','myself_menu',1,5,1,0,NULL,NULL,NULL),('page',NULL,NULL,NULL,'icon-tablet',NULL,1,3,1,0,NULL,NULL,NULL),('page_list',NULL,'cmsPage/list','cmsPage/metadata,sysUser/lookup,cmsContent/lookup,cmsContent/lookup_list,cmsCategory/lookup','icon-globe','page_menu',1,1,1,0,NULL,NULL,NULL),('page_menu',NULL,NULL,NULL,'icon-globe','page',1,0,1,0,NULL,NULL,NULL),('page_metadata',NULL,'cmsPage/metadata','cmsPage/save',NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_publish',NULL,NULL,'cmsTemplate/publish',NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_save',NULL,NULL,'cmsPage/save,file/doUpload,cmsPage/clearCache',NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_select_category',NULL,'cmsCategory/lookup',NULL,NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_select_category_type',NULL,'cmsCategoryType/lookup',NULL,NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_select_content',NULL,'cmsContent/lookup','cmsContent/lookup_list',NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_select_tag_type',NULL,'cmsTagType/lookup',NULL,NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_select_template',NULL,'cmsTemplate/lookup',NULL,NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('page_select_user',NULL,'sysUser/lookup',NULL,NULL,'page_list',0,0,1,0,NULL,NULL,NULL),('place_add',NULL,'cmsPlace/add','cmsContent/lookup,cmsPlace/lookup,cmsPlace/lookup_content_list,file/doUpload,cmsPlace/save',NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('place_check',NULL,NULL,'cmsPlace/check,cmsPlace/uncheck',NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('place_clear',NULL,NULL,'cmsPlace/clear',NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('place_data_list',NULL,'cmsPlace/dataList','cmsPlace/export',NULL,'place_list',0,1,1,0,NULL,NULL,NULL),('place_delete',NULL,NULL,'cmsPlace/delete',NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('place_list',NULL,'cmsPlace/list','sysUser/lookup','icon-list-alt','page_menu',1,1,1,0,NULL,NULL,NULL),('place_publish',NULL,'cmsPlace/publish_place','cmsTemplate/publishPlace',NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('place_refresh',NULL,NULL,'cmsPlace/refresh',NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('place_template_content',NULL,'placeTemplate/content','cmsTemplate/help,cmsTemplate/savePlace,cmsTemplate/chipLookup,cmsWebFile/lookup,cmsWebFile/contentForm,placeTemplate/form',NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_template_data_dictionary',NULL,'cmsDictionary/lookup',NULL,NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_template_fragment',NULL,'cmsTemplate/ftlLookup',NULL,NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_template_help',NULL,'cmsTemplate/help',NULL,NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_template_list',NULL,'placeTemplate/list',NULL,'icon-list-alt','file_menu',1,2,1,0,NULL,NULL,NULL),('place_template_metadata',NULL,'placeTemplate/metadata','cmsTemplate/savePlaceMetaData',NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_template_place',NULL,'placeTemplate/lookup',NULL,NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_template_webfile',NULL,'cmsWebFile/lookup',NULL,NULL,'place_template_list',0,0,1,0,NULL,NULL,NULL),('place_view',NULL,'cmsPlace/view',NULL,NULL,'place_list',0,0,1,0,NULL,NULL,NULL),('report_user',NULL,'report/user',NULL,'icon-male','user_menu',1,5,1,0,NULL,NULL,NULL),('role_add',NULL,'sysRole/add','sysRole/save',NULL,'role_list',0,0,1,0,NULL,NULL,NULL),('role_delete',NULL,NULL,'sysRole/delete',NULL,'role_list',0,0,1,0,NULL,NULL,NULL),('role_list',NULL,'sysRole/list',NULL,'icon-user-md','user_menu',1,3,1,0,NULL,NULL,NULL),('system_menu',NULL,NULL,NULL,'icon-cogs','maintenance',1,2,1,0,NULL,NULL,NULL),('tag_add',NULL,'cmsTag/add','cmsTagType/lookup,cmsTag/save',NULL,'tag_list',0,0,1,0,NULL,NULL,NULL),('tag_delete',NULL,NULL,'cmsTag/delete',NULL,'tag_list',0,0,1,0,NULL,NULL,NULL),('tag_list',NULL,'cmsTag/list','cmsTagType/lookup','icon-tag','content_extend',1,1,1,0,NULL,NULL,NULL),('tag_type_delete',NULL,NULL,'cmsTagType/delete',NULL,'tag_type_list',0,0,1,0,NULL,NULL,NULL),('tag_type_list',NULL,'cmsTagType/list',NULL,'icon-tags','category_extend',1,2,1,0,NULL,NULL,NULL),('tag_type_save',NULL,'cmsTagType/add','cmsTagType/save',NULL,'tag_type_list',0,0,1,0,NULL,NULL,NULL),('task_add',NULL,'sysTask/add','sysTask/save,sysTask/example,taskTemplate/lookup',NULL,'task_list',0,0,1,0,NULL,NULL,NULL),('task_delete',NULL,NULL,'sysTask/delete',NULL,'task_list',0,0,1,0,NULL,NULL,NULL),('task_list',NULL,'sysTask/list',NULL,'icon-time','system_menu',1,2,1,0,NULL,NULL,NULL),('task_pause',NULL,NULL,'sysTask/pause',NULL,'task_list',0,0,1,0,NULL,NULL,NULL),('task_recreate',NULL,NULL,'sysTask/recreate',NULL,'task_list',0,0,1,0,NULL,NULL,NULL),('task_resume',NULL,NULL,'sysTask/resume',NULL,'task_list',0,0,1,0,NULL,NULL,NULL),('task_runonce',NULL,NULL,'sysTask/runOnce',NULL,'task_list',0,0,1,0,NULL,NULL,NULL),('task_template_content',NULL,'taskTemplate/content','taskTemplate/save,taskTemplate/chipLookup,cmsTemplate/help,placeTemplate/form,cmsWebFile/contentForm',NULL,'task_template_list',0,0,1,0,NULL,NULL,NULL),('task_template_delete',NULL,NULL,'taskTemplate/delete',NULL,'task_template_list',0,0,1,0,NULL,NULL,NULL),('task_template_fragment',NULL,'taskTemplate/chipLookup',NULL,NULL,'task_template_list',0,0,1,0,NULL,NULL,NULL),('task_template_help',NULL,'cmsTemplate/help',NULL,NULL,'task_template_list',0,0,1,0,NULL,NULL,NULL),('task_template_list',NULL,'taskTemplate/list',NULL,'icon-time','file_menu',1,3,1,0,NULL,NULL,NULL),('template_content',NULL,'cmsTemplate/content','cmsTemplate/save,cmsTemplate/chipLookup,cmsWebFile/lookup,placeTemplate/form,cmsWebFile/contentForm,cmsTemplate/demo,cmsTemplate/help,cmsTemplate/upload,cmsTemplate/doUpload',NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_content-type',NULL,'cmsTemplate/contentTypeLookup',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_content_form',NULL,'cmsTemplate/contentForm',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_data_dictionary',NULL,'cmsDictionary/lookup',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_delete',NULL,NULL,'cmsTemplate/delete',NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_demo',NULL,'cmsTemplate/demo',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_fragment',NULL,'cmsTemplate/ftlLookup',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_help',NULL,'cmsTemplate/help',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_list',NULL,'cmsTemplate/list','cmsTemplate/directory','icon-code','file_menu',1,1,1,0,NULL,NULL,NULL),('template_metadata',NULL,'cmsTemplate/metadata','cmsTemplate/saveMetadata',NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_place',NULL,'placeTemplate/lookup',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_place_form',NULL,'placeTemplate/form',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_upload',NULL,'cmsTemplate/upload','cmsTemplate/doUpload',NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('template_website_file',NULL,'cmsWebFile/lookup',NULL,NULL,'template_list',0,0,1,0,NULL,NULL,NULL),('user_add',NULL,'sysUser/add','sysDept/lookup,sysUser/save',NULL,'user_list',0,0,1,0,NULL,NULL,NULL),('user_disable',NULL,NULL,'sysUser/disable',NULL,'user_list',0,0,1,0,NULL,NULL,NULL),('user_enable',NULL,NULL,'sysUser/enable',NULL,'user_list',0,0,1,0,NULL,NULL,NULL),('user_list',NULL,'sysUser/list',NULL,'icon-user','user_menu',1,1,1,0,NULL,NULL,NULL),('user_menu',NULL,NULL,NULL,'icon-user','maintenance',1,1,1,0,NULL,NULL,NULL),('webfile_content',NULL,'cmsWebFile/content','cmsWebFile/save',NULL,'webfile_list',0,0,1,0,NULL,NULL,NULL),('webfile_directory',NULL,'cmsWebFile/directory','cmsWebFile/createDirectory',NULL,'webfile_list',0,0,1,0,NULL,NULL,NULL),('webfile_list',NULL,'cmsWebFile/list',NULL,'icon-globe','file_menu',1,4,1,0,NULL,NULL,NULL),('webfile_unzip',NULL,'cmsWebFile/unzipParameters','cmsWebFile/unzip',NULL,'webfile_list',0,0,1,0,NULL,NULL,NULL),('webfile_upload',NULL,'cmsWebFile/upload','cmsWebFile/doUpload,cmsWebFile/check',NULL,'webfile_list',0,0,1,0,NULL,NULL,NULL),('webfile_zip',NULL,NULL,'cmsWebFile/zip',NULL,'webfile_list',0,0,1,0,NULL,NULL,NULL),('word_list',NULL,'cmsWord/list',NULL,'icon-search','content_extend',1,2,1,0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `sys_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_module_lang`
--

DROP TABLE IF EXISTS `sys_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_module_lang` (
  `module_id` varchar(30) NOT NULL COMMENT '모듈 ID',
  `lang` varchar(20) NOT NULL COMMENT '언어',
  `value` varchar(100) DEFAULT NULL COMMENT '값',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`module_id`,`lang`) USING BTREE,
  KEY `sys_module_lang_lang` (`lang`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='모듈 언어';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_module_lang`
--

LOCK TABLES `sys_module_lang` WRITE;
/*!40000 ALTER TABLE `sys_module_lang` DISABLE KEYS */;
INSERT INTO `sys_module_lang` VALUES ('12121','en','121',NULL,NULL),('12121','ko','121',NULL,NULL),('312312','en','21312312',NULL,NULL),('312312','ko','2131221',NULL,NULL),('3321321','en','12321',NULL,NULL),('3321321','ko','12312',NULL,NULL),('account_add','en','Add',NULL,NULL),('account_add','ko','추가',NULL,NULL),('account_history_list','en','Account History',NULL,NULL),('account_history_list','ko','계정 내역',NULL,NULL),('account_list','en','Account management',NULL,NULL),('account_list','ko','계정 관리',NULL,NULL),('account_recharge','en','Recharge',NULL,NULL),('account_recharge','ko','재충전',NULL,NULL),('app_add','en','Add/edit',NULL,NULL),('app_add','ko','추가/수정',NULL,NULL),('app_client_disable','en','Disable',NULL,NULL),('app_client_disable','ko','비활성화',NULL,NULL),('app_client_enable','en','Enable',NULL,NULL),('app_client_enable','ko','활성화',NULL,NULL),('app_client_list','en','Application client management',NULL,NULL),('app_client_list','ko','클라이언트 관리',NULL,NULL),('app_delete','en','Delete',NULL,NULL),('app_delete','ko','삭제',NULL,NULL),('app_issue','en','Issue authorization',NULL,NULL),('app_issue','ko','승인 발급',NULL,NULL),('app_list','en','Application Authorization',NULL,NULL),('app_list','ko','어플리케이션 승인',NULL,NULL),('category','en','Category',NULL,NULL),('category','ko','분류',NULL,NULL),('category_add','en','Add/edit',NULL,NULL),('category_add','ko','추가/수정',NULL,NULL),('category_delete','en','Delete',NULL,NULL),('category_delete','ko','삭제',NULL,NULL),('category_extend','en','Category extension',NULL,NULL),('category_extend','ko','분류 확장',NULL,NULL),('category_menu','en','Category management',NULL,NULL),('category_menu','ko','분류 관리',NULL,NULL),('category_move','en','Move',NULL,NULL),('category_move','ko','이동',NULL,NULL),('category_publish','en','Publish',NULL,NULL),('category_publish','ko','발행',NULL,NULL),('category_push','en','Push',NULL,NULL),('category_push','ko','관련콘텐츠',NULL,NULL),('category_type_add','en','Add/edit',NULL,NULL),('category_type_add','ko','추가/수정',NULL,NULL),('category_type_change','en','Change category type',NULL,NULL),('category_type_change','ko','수정 유형',NULL,NULL),('category_type_delete','en','Delete',NULL,NULL),('category_type_delete','ko','삭제',NULL,NULL),('category_type_list','en','Category type',NULL,NULL),('category_type_list','ko','분류 유형',NULL,NULL),('clearcache','en','Clear cache',NULL,NULL),('clearcache','ko','캐시 새로 고침',NULL,NULL),('comment_check','en','Check',NULL,NULL),('comment_check','ko','리뷰',NULL,NULL),('comment_delete','en','Delete',NULL,NULL),('comment_delete','ko','삭제',NULL,NULL),('comment_edit','en','Edit',NULL,NULL),('comment_edit','ko','수정',NULL,NULL),('comment_list','en','Comment management',NULL,NULL),('comment_list','ko','댓글 관리',NULL,NULL),('comment_reply','en','Reply',NULL,NULL),('comment_reply','ko','댓글',NULL,NULL),('comment_uncheck','en','Uncheck',NULL,NULL),('comment_uncheck','ko','검토 취소',NULL,NULL),('config_add','en','Add/edit',NULL,NULL),('config_add','ko','추가/수정',NULL,NULL),('config_data_delete','en','Clear config data',NULL,NULL),('config_data_delete','ko','설정 초기화',NULL,NULL),('config_data_edit','en','Edit',NULL,NULL),('config_data_edit','ko','수정',NULL,NULL),('config_data_list','en','Site configuration',NULL,NULL),('config_data_list','ko','사이트 설정',NULL,NULL),('config_delete','en','Delete',NULL,NULL),('config_delete','ko','설정 삭제',NULL,NULL),('config_list','en','Site config management',NULL,NULL),('config_list','ko','사이트 설정 관리',NULL,NULL),('config_list_data_dictionary','en','Select data dictionary',NULL,NULL),('config_list_data_dictionary','ko','데이터 사전 선택',NULL,NULL),('config_menu','en','Configuration management',NULL,NULL),('config_menu','ko','설정 관리',NULL,NULL),('content','en','Content',NULL,NULL),('content','ko','콘텐츠',NULL,NULL),('content_add','en','Add/edit',NULL,NULL),('content_add','ko','추가/수정',NULL,NULL),('content_check','en','Check',NULL,NULL),('content_check','ko','리뷰',NULL,NULL),('content_delete','en','Delete',NULL,NULL),('content_delete','ko','삭제',NULL,NULL),('content_export','en','Export',NULL,NULL),('content_export','ko','내보내기',NULL,NULL),('content_extend','en','Content extension',NULL,NULL),('content_extend','ko','콘텐츠 확장',NULL,NULL),('content_menu','en','Content management',NULL,NULL),('content_menu','ko','콘텐츠 관리',NULL,NULL),('content_move','en','Move',NULL,NULL),('content_move','ko','이동',NULL,NULL),('content_publish','en','Publish',NULL,NULL),('content_publish','ko','생성',NULL,NULL),('content_push','en','Push',NULL,NULL),('content_push','ko','관련 콘텐츠',NULL,NULL),('content_recycle_delete','en','Delete',NULL,NULL),('content_recycle_delete','ko','삭제',NULL,NULL),('content_recycle_list','en','Content recycle',NULL,NULL),('content_recycle_list','ko','콘텐츠 삭제',NULL,NULL),('content_recycle_recycle','en','Restore',NULL,NULL),('content_recycle_recycle','ko','복원',NULL,NULL),('content_refresh','en','Refresh',NULL,NULL),('content_refresh','ko','새로고침',NULL,NULL),('content_select_category','en','Select category',NULL,NULL),('content_select_category','ko','카테고리 선택',NULL,NULL),('content_select_category_type','en','Select category type',NULL,NULL),('content_select_category_type','ko','분류 유형 선택',NULL,NULL),('content_select_content','en','Select content',NULL,NULL),('content_select_content','ko','콘텐츠 선택',NULL,NULL),('content_select_tag','en','Select tag',NULL,NULL),('content_select_tag','ko','태그 선택',NULL,NULL),('content_select_tag_type','en','Select tag type',NULL,NULL),('content_select_tag_type','ko','태그 유형 선택',NULL,NULL),('content_select_template','en','Select template',NULL,NULL),('content_select_template','ko','템플릿 선택',NULL,NULL),('content_select_user','en','Select user',NULL,NULL),('content_select_user','ko','사용자 선택',NULL,NULL),('content_select_vote','en','Select vote',NULL,NULL),('content_select_vote','ko','Select vote',NULL,NULL),('content_sort','en','Sort',NULL,NULL),('content_sort','ko','상단',NULL,NULL),('content_uncheck','en','Uncheck',NULL,NULL),('content_uncheck','ko','검토 완료 취소',NULL,NULL),('content_view','en','View',NULL,NULL),('content_view','ko','보기',NULL,NULL),('content_vote','en','Voting Management',NULL,NULL),('content_vote','ko','투표 관리',NULL,NULL),('content_vote_add','en','Add/edit',NULL,NULL),('content_vote_add','ko','추가/수정',NULL,NULL),('content_vote_delete','en','Delete',NULL,NULL),('content_vote_delete','ko','삭제',NULL,NULL),('content_vote_view','en','View',NULL,NULL),('content_vote_view','ko','보기',NULL,NULL),('dept_add','en','Add/edit',NULL,NULL),('dept_add','ko','추가/수정',NULL,NULL),('dept_delete','en','Delete',NULL,NULL),('dept_delete','ko','삭제',NULL,NULL),('dept_list','en','Department management',NULL,NULL),('dept_list','ko','부서 관리',NULL,NULL),('dept_user_list','en','Department user management',NULL,NULL),('dept_user_list','ko','인사 관리',NULL,NULL),('develop','en','Develop',NULL,NULL),('develop','ko','개발',NULL,NULL),('dictionary_add','en','Add/edit',NULL,NULL),('dictionary_add','ko','추가/수정',NULL,NULL),('dictionary_delete','en','Delete',NULL,NULL),('dictionary_delete','ko','삭제',NULL,NULL),('dictionary_list','en','Dictionary management',NULL,NULL),('dictionary_list','ko','데이터 사전',NULL,NULL),('domain_config','en','Edit',NULL,NULL),('domain_config','ko','수정',NULL,NULL),('domain_list','en','Domain management',NULL,NULL),('domain_list','ko','도메인 이름 바인딩',NULL,NULL),('file_menu','en','File maintenance',NULL,NULL),('file_menu','ko','파일 관리',NULL,NULL),('log_login','en','Login log',NULL,NULL),('log_login','ko','로그인 로그',NULL,NULL),('log_login_delete','en','Delete',NULL,NULL),('log_login_delete','ko','삭제',NULL,NULL),('log_menu','en','Log management',NULL,NULL),('log_menu','ko','로그 관리',NULL,NULL),('log_operate','en','Operate log',NULL,NULL),('log_operate','ko','작업 로그',NULL,NULL),('log_operate_delete','en','Delete',NULL,NULL),('log_operate_delete','ko','삭제',NULL,NULL),('log_operate_view','en','View',NULL,NULL),('log_operate_view','ko','보기',NULL,NULL),('log_task','en','Task log',NULL,NULL),('log_task','ko','작업 관리 로그',NULL,NULL),('log_task_delete','en','Delete',NULL,NULL),('log_task_delete','ko','삭제',NULL,NULL),('log_task_view','en','View',NULL,NULL),('log_task_view','ko','보기',NULL,NULL),('log_upload','en','Upload log',NULL,NULL),('log_upload','ko','업로드 로그',NULL,NULL),('maintenance','en','Maintain',NULL,NULL),('maintenance','ko','관리',NULL,NULL),('model_add','en','Add/edit',NULL,NULL),('model_add','ko','추가/수정',NULL,NULL),('model_delete','en','Delete',NULL,NULL),('model_delete','ko','삭제',NULL,NULL),('model_list','en','Model management',NULL,NULL),('model_list','ko','콘텐츠 모델 관리',NULL,NULL),('myself','en','Myself',NULL,NULL),('myself','ko','내 계정',NULL,NULL),('myself_content','en','My content',NULL,NULL),('myself_content','ko','내 콘텐츠',NULL,NULL),('myself_content_add','en','Add',NULL,NULL),('myself_content_add','ko','수정',NULL,NULL),('myself_content_delete','en','Delete',NULL,NULL),('myself_content_delete','ko','삭제',NULL,NULL),('myself_content_publish','en','Publish',NULL,NULL),('myself_content_publish','ko','생성',NULL,NULL),('myself_content_push','en','Push',NULL,NULL),('myself_content_push','ko','관련콘텐츠',NULL,NULL),('myself_content_refresh','en','Refresh',NULL,NULL),('myself_content_refresh','ko','새로고침',NULL,NULL),('myself_device','en','My device',NULL,NULL),('myself_device','ko','나의 기기',NULL,NULL),('myself_log_login','en','My login log',NULL,NULL),('myself_log_login','ko','내 로그인 로그',NULL,NULL),('myself_log_operate','en','My operate log',NULL,NULL),('myself_log_operate','ko','내 작업 로그',NULL,NULL),('myself_menu','en','My account',NULL,NULL),('myself_menu','ko','내 계정',NULL,NULL),('myself_password','en','Change password',NULL,NULL),('myself_password','ko','비밀번호 변경',NULL,NULL),('myself_token','en','My login token',NULL,NULL),('myself_token','ko','내 로그인 인증',NULL,NULL),('order_history_list','en','Order history',NULL,NULL),('order_history_list','ko','주문 내역',NULL,NULL),('order_list','en','Order management',NULL,NULL),('order_list','ko','주문 관리',NULL,NULL),('page','en','Page',NULL,NULL),('page','ko','페이지',NULL,NULL),('page_list','en','Page management',NULL,NULL),('page_list','ko','페이지 관리',NULL,NULL),('page_menu','en','Page maintenance',NULL,NULL),('page_menu','ko','페이지 유지 관리',NULL,NULL),('page_metadata','en','Metadata management',NULL,NULL),('page_metadata','ko','메타 데이터 관리',NULL,NULL),('page_publish','en','Publish',NULL,NULL),('page_publish','ko','페이지 생성',NULL,NULL),('page_save','en','Save configuration',NULL,NULL),('page_save','ko','페이지 설정 저장',NULL,NULL),('page_select_category','en','Select category',NULL,NULL),('page_select_category','ko','카테고리 선택',NULL,NULL),('page_select_category_type','en','Select category type',NULL,NULL),('page_select_category_type','ko','분류 유형 선택',NULL,NULL),('page_select_content','en','Select content',NULL,NULL),('page_select_content','ko','콘텐츠 선택',NULL,NULL),('page_select_tag_type','en','Select tag type',NULL,NULL),('page_select_tag_type','ko','태그 유형 선택',NULL,NULL),('page_select_template','en','Select template',NULL,NULL),('page_select_template','ko','템플릿 선택',NULL,NULL),('page_select_user','en','Select user',NULL,NULL),('page_select_user','ko','사용자 선택',NULL,NULL),('place_add','en','Add/edit',NULL,NULL),('place_add','ko','추가/추천 데이터 수정',NULL,NULL),('place_check','en','Check',NULL,NULL),('place_check','ko','추천 데이터 검토',NULL,NULL),('place_clear','en','Clear',NULL,NULL),('place_clear','ko','추천 데이터 지우기',NULL,NULL),('place_data_list','en','Page fragment data',NULL,NULL),('place_data_list','ko','추천 데이터',NULL,NULL),('place_delete','en','data',NULL,NULL),('place_delete','ko','추천 데이터 삭제',NULL,NULL),('place_list','en','Page fragment management',NULL,NULL),('place_list','ko','페이지 조각 관리',NULL,NULL),('place_publish','en','Publish',NULL,NULL),('place_publish','ko','해제',NULL,NULL),('place_refresh','en','Refresh',NULL,NULL),('place_refresh','ko','추천 데이터 새로 고침',NULL,NULL),('place_template_content','en','Edit template',NULL,NULL),('place_template_content','ko','수정',NULL,NULL),('place_template_data_dictionary','en','Select data dictionary',NULL,NULL),('place_template_data_dictionary','ko','데이터 사전 선택',NULL,NULL),('place_template_fragment','en','Template fragment',NULL,NULL),('place_template_fragment','ko','템플릿 조각',NULL,NULL),('place_template_help','en','Template help',NULL,NULL),('place_template_help','ko','템플릿 도움말',NULL,NULL),('place_template_list','en','Page fragment template',NULL,NULL),('place_template_list','ko','페이지 조각 템플릿',NULL,NULL),('place_template_metadata','en','Edit metadata',NULL,NULL),('place_template_metadata','ko','메타 데이터 수정',NULL,NULL),('place_template_place','en','Page fragment',NULL,NULL),('place_template_place','ko','페이지 조각',NULL,NULL),('place_template_webfile','en','Website file',NULL,NULL),('place_template_webfile','ko','웹 사이트 파일',NULL,NULL),('place_view','en','View',NULL,NULL),('place_view','ko','추천 데이터보기',NULL,NULL),('refund_list','en','Refund management',NULL,NULL),('refund_list','ko','환불 관리',NULL,NULL),('refund_refund','en','Refund',NULL,NULL),('refund_refund','ko','환불하다',NULL,NULL),('report_user','en','User report',NULL,NULL),('report_user','ko','사용자 데이터 모니터링',NULL,NULL),('role_add','en','Add/edit',NULL,NULL),('role_add','ko','추가/수정',NULL,NULL),('role_delete','en','Delete',NULL,NULL),('role_delete','ko','삭제',NULL,NULL),('role_list','en','Role management',NULL,NULL),('role_list','ko','역할 관리',NULL,NULL),('system_menu','en','System maintenance',NULL,NULL),('system_menu','ko','시스템 유지 관리',NULL,NULL),('tag_add','en','Add/edit',NULL,NULL),('tag_add','ko','추가/수정',NULL,NULL),('tag_delete','en','Delete',NULL,NULL),('tag_delete','ko','삭제',NULL,NULL),('tag_list','en','Tag management',NULL,NULL),('tag_list','ko','태그 관리',NULL,NULL),('tag_type_delete','en','Delete',NULL,NULL),('tag_type_delete','ko','삭제',NULL,NULL),('tag_type_list','en','Tag type',NULL,NULL),('tag_type_list','ko','태그 분류',NULL,NULL),('tag_type_save','en','Add/edit',NULL,NULL),('tag_type_save','ko','추가/수정',NULL,NULL),('task_add','en','Add/edit',NULL,NULL),('task_add','ko','추가/수정',NULL,NULL),('task_delete','en','Delete',NULL,NULL),('task_delete','ko','삭제',NULL,NULL),('task_list','en','Task management',NULL,NULL),('task_list','ko','작업 관리',NULL,NULL),('task_pause','en','Pause',NULL,NULL),('task_pause','ko','일시 중지',NULL,NULL),('task_recreate','en','Recreate',NULL,NULL),('task_recreate','ko','재생성',NULL,NULL),('task_resume','en','Resume',NULL,NULL),('task_resume','ko','복원',NULL,NULL),('task_runonce','en','Run once',NULL,NULL),('task_runonce','ko','즉시 실행',NULL,NULL),('task_template_content','en','Edit',NULL,NULL),('task_template_content','ko','수정',NULL,NULL),('task_template_delete','en','Delete',NULL,NULL),('task_template_delete','ko','삭제',NULL,NULL),('task_template_fragment','en','Task script fragment',NULL,NULL),('task_template_fragment','ko','작업 스크립트',NULL,NULL),('task_template_help','en','help',NULL,NULL),('task_template_help','ko','도움',NULL,NULL),('task_template_list','en','Task template management',NULL,NULL),('task_template_list','ko','작업 예약 스크립트',NULL,NULL),('template_content','en','Edit',NULL,NULL),('template_content','ko','수정',NULL,NULL),('template_content-type','en','Select content-type',NULL,NULL),('template_content-type','ko','content-type 선택',NULL,NULL),('template_content_form','en','Content contribute form',NULL,NULL),('template_content_form','ko','콘텐츠 제출 양식',NULL,NULL),('template_data_dictionary','en','Select data dictionary',NULL,NULL),('template_data_dictionary','ko','데이터 사전 선택',NULL,NULL),('template_delete','en','Delete',NULL,NULL),('template_delete','ko','삭제',NULL,NULL),('template_demo','en','Template example',NULL,NULL),('template_demo','ko','템플릿 예',NULL,NULL),('template_fragment','en','Template fragment',NULL,NULL),('template_fragment','ko','템플릿 조각',NULL,NULL),('template_help','en','Template help',NULL,NULL),('template_help','ko','템플릿 도움말',NULL,NULL),('template_list','en','Template management',NULL,NULL),('template_list','ko','템플릿 파일 관리',NULL,NULL),('template_metadata','en','Edit metadata',NULL,NULL),('template_metadata','ko','메타 데이터 수정',NULL,NULL),('template_place','en','Page fragment',NULL,NULL),('template_place','ko','페이지 조각',NULL,NULL),('template_place_form','en','Page fragment data contribute form',NULL,NULL),('template_place_form','ko','페이지 조각 제출 양식',NULL,NULL),('template_upload','en','Upload template',NULL,NULL),('template_upload','ko','템플릿 업로드',NULL,NULL),('template_website_file','en','Website file',NULL,NULL),('template_website_file','ko','웹 사이트 파일',NULL,NULL),('user_add','en','Add/edit',NULL,NULL),('user_add','ko','추가/수정',NULL,NULL),('user_disable','en','Disable',NULL,NULL),('user_disable','ko','비활성화',NULL,NULL),('user_enable','en','Enable',NULL,NULL),('user_enable','ko','활성화',NULL,NULL),('user_list','en','User management',NULL,NULL),('user_list','ko','사용자 관리',NULL,NULL),('user_menu','en','User maintenance',NULL,NULL),('user_menu','ko','사용자 관리',NULL,NULL),('webfile_content','en','Edit file',NULL,NULL),('webfile_content','ko','파일 수정',NULL,NULL),('webfile_directory','en','Create Directory',NULL,NULL),('webfile_directory','ko','새 디렉토리',NULL,NULL),('webfile_list','en','Website file management',NULL,NULL),('webfile_list','ko','웹 사이트 파일 관리',NULL,NULL),('webfile_unzip','en','Decompress',NULL,NULL),('webfile_unzip','ko','압축을 풀다',NULL,NULL),('webfile_upload','en','Upload',NULL,NULL),('webfile_upload','ko','업로드',NULL,NULL),('webfile_zip','en','Compress',NULL,NULL),('webfile_zip','ko','압축',NULL,NULL),('word_list','en','Search word management',NULL,NULL),('word_list','ko','검색어 관리',NULL,NULL),('wwwww','en','dfsdfds',NULL,NULL),('wwwww','ko','dsfsd',NULL,NULL),('ㄴㅇㄹㄴㅇ','en','332432',NULL,NULL),('ㄴㅇㄹㄴㅇ','ko','32432',NULL,NULL);
/*!40000 ALTER TABLE `sys_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_role`
--

DROP TABLE IF EXISTS `sys_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `owns_all_right` tinyint(1) NOT NULL COMMENT '모든 권한 보유',
  `show_all_module` tinyint(1) NOT NULL COMMENT '모든 모듈 표시',
  `status` tinyint(4) DEFAULT 1 COMMENT '상태',
  `description` varchar(200) DEFAULT NULL COMMENT '설명',
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `sys_role_site_id` (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COMMENT='역할';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_role`
--

LOCK TABLES `sys_role` WRITE;
/*!40000 ALTER TABLE `sys_role` DISABLE KEYS */;
INSERT INTO `sys_role` VALUES (1,1,'superuser',1,0,1,NULL,'2021-10-13 05:50:02',NULL),(2,1,'fgfdg',0,0,2,'fdgdf','2021-10-13 07:34:24',NULL),(3,1,'sdfsd',0,0,1,'fsdsdfsd','2021-10-13 07:35:34',NULL),(4,1,'sdfsd',0,0,1,'fsdsdfsd','2021-10-13 16:35:22',NULL),(5,1,'sdfsdaaa',0,0,1,'fsdsdfsd','2021-10-13 16:40:52',NULL),(6,1,'rrrrrr',0,0,1,'fsdsdfsd','2021-10-13 16:41:28',NULL),(7,1,'rrraaaarr',0,0,1,'fsdsdfsd','2021-10-13 16:42:21',NULL),(8,1,'rrrddddrrr',0,0,1,'fsdsdfsd','2021-10-13 16:43:58',NULL),(9,1,'rrrddddrrr',0,0,1,'fsdsdfsd','2021-10-13 16:46:41',NULL),(10,1,'rrrsssddddrrr',0,0,1,'fsdsdfsd','2021-10-13 16:47:07',NULL),(11,1,'rrrddddrrr',0,0,1,'fsdsdfsd','2021-10-13 16:49:19',NULL),(12,1,'ㅂㅂㅂㅂㅂㅂ',0,0,1,'fsdsdfsd','2021-10-13 08:54:30',NULL),(13,1,'111111',0,0,1,'fsdsdfsd','2021-10-13 08:38:35',NULL);
/*!40000 ALTER TABLE `sys_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_role_authorized`
--

DROP TABLE IF EXISTS `sys_role_authorized`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_role_authorized` (
  `role_id` int(11) NOT NULL COMMENT '역할 ID',
  `url` varchar(100) NOT NULL COMMENT '승인 된 주소',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`role_id`,`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='역할 승인 주소';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_role_authorized`
--

LOCK TABLES `sys_role_authorized` WRITE;
/*!40000 ALTER TABLE `sys_role_authorized` DISABLE KEYS */;
INSERT INTO `sys_role_authorized` VALUES (12,'11',NULL,NULL),(12,'12312',NULL,NULL),(12,'2131',NULL,NULL),(12,'21312',NULL,NULL),(13,'12312',NULL,NULL),(13,'21312',NULL,NULL),(13,'324234',NULL,NULL),(13,'dasasdas',NULL,NULL);
/*!40000 ALTER TABLE `sys_role_authorized` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_role_module`
--

DROP TABLE IF EXISTS `sys_role_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_role_module` (
  `role_id` int(11) NOT NULL COMMENT '역할 ID',
  `module_id` varchar(30) NOT NULL COMMENT '모듈 ID',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`role_id`,`module_id`),
  KEY `sys_role_module_module_id` (`module_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='역할 인증 모듈';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_role_module`
--

LOCK TABLES `sys_role_module` WRITE;
/*!40000 ALTER TABLE `sys_role_module` DISABLE KEYS */;
INSERT INTO `sys_role_module` VALUES (12,'12121',NULL,NULL),(12,'312312',NULL,NULL),(12,'3321321',NULL,NULL),(13,'312312',NULL,NULL),(13,'wwwww',NULL,NULL);
/*!40000 ALTER TABLE `sys_role_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_role_user`
--

DROP TABLE IF EXISTS `sys_role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_role_user` (
  `role_id` int(11) NOT NULL COMMENT '역할 ID',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `sys_role_user_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사용자 역할';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_role_user`
--

LOCK TABLES `sys_role_user` WRITE;
/*!40000 ALTER TABLE `sys_role_user` DISABLE KEYS */;
INSERT INTO `sys_role_user` VALUES (1,1,NULL,NULL);
/*!40000 ALTER TABLE `sys_role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_site`
--

DROP TABLE IF EXISTS `sys_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_site` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `parent_id` smallint(6) DEFAULT NULL COMMENT '상위 사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '사이트 이름',
  `use_static` tinyint(1) NOT NULL COMMENT '정적 활성화',
  `site_path` varchar(255) NOT NULL COMMENT '사이트 주소',
  `use_ssi` tinyint(1) NOT NULL COMMENT '서버 측 포함 활성화',
  `dynamic_path` varchar(255) NOT NULL COMMENT '동적 사이트 주소',
  `disabled` tinyint(1) NOT NULL COMMENT '비활성화',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`),
  KEY `sys_site_disabled` (`disabled`),
  KEY `sys_site_parent_id` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='사이트';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_site`
--

LOCK TABLES `sys_site` WRITE;
/*!40000 ALTER TABLE `sys_site` DISABLE KEYS */;
INSERT INTO `sys_site` VALUES (1,NULL,'SyncCMS',0,'//dev.nudejava.net/webfile/',0,'//dev.nudejava.net/',0,NULL,NULL);
/*!40000 ALTER TABLE `sys_site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_task`
--

DROP TABLE IF EXISTS `sys_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `status` int(11) NOT NULL COMMENT '상태',
  `cron_expression` varchar(50) NOT NULL COMMENT 'Cron',
  `description` varchar(300) DEFAULT NULL COMMENT '설명',
  `file_path` varchar(255) DEFAULT NULL COMMENT '파일 경로',
  `create_date` datetime DEFAULT NULL COMMENT '생성일',
  `update_date` datetime DEFAULT NULL COMMENT '업데이트 시간',
  PRIMARY KEY (`id`),
  KEY `sys_task_status` (`status`),
  KEY `sys_task_site_id` (`site_id`),
  KEY `sys_task_update_date` (`update_date`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='Task';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_task`
--

LOCK TABLES `sys_task` WRITE;
/*!40000 ALTER TABLE `sys_task` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_user`
--

DROP TABLE IF EXISTS `sys_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `username` varchar(50) NOT NULL COMMENT '사용자 이름',
  `password` varchar(128) NOT NULL COMMENT '암호',
  `salt` varchar(20) DEFAULT NULL COMMENT '난독 화 된 코드,비어있는 경우 암호는 md5입니다.,10 자리sha512(sha512(password)+salt)',
  `weak_password` tinyint(1) NOT NULL DEFAULT 0 COMMENT '약한 암호',
  `nickname` varchar(45) NOT NULL COMMENT '별명',
  `dept_id` int(11) DEFAULT NULL COMMENT '부서',
  `owns_all_content` tinyint(1) NOT NULL DEFAULT 1 COMMENT '모든 콘텐츠 권한 보유',
  `is_admin` tinyint(1) NOT NULL COMMENT '관리자 여부',
  `email` varchar(100) DEFAULT NULL COMMENT '이메일 주소',
  `email_verified` tinyint(1) NOT NULL COMMENT '확인 된 이메일',
  `locked` tinyint(1) DEFAULT 0 COMMENT '계정 잠김 여부',
  `disabled` tinyint(1) NOT NULL COMMENT '비활성화 여부',
  `last_login_date` datetime DEFAULT NULL COMMENT '마지막 로그인 날짜',
  `last_login_ip` varchar(130) DEFAULT NULL COMMENT '마지막 로그인 IP',
  `login_count` int(11) NOT NULL COMMENT '로그인 시간',
  `login_fail_count` int(11) DEFAULT 0 COMMENT '로그인 실패 횟수',
  `roles` text DEFAULT NULL COMMENT '역할',
  `create_date` datetime DEFAULT NULL COMMENT '등록 날짜',
  `update_date` datetime DEFAULT NULL COMMENT '수정 날짜',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sys_user_name` (`username`,`site_id`),
  UNIQUE KEY `sys_user_nick_name` (`nickname`,`site_id`),
  KEY `sys_user_email` (`email`),
  KEY `sys_user_disabled` (`disabled`),
  KEY `sys_user_lastLoginDate` (`last_login_date`),
  KEY `sys_user_email_checked` (`email_verified`),
  KEY `sys_user_dept_id` (`dept_id`),
  KEY `sys_user_site_id` (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='사용자';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_user`
--

LOCK TABLES `sys_user` WRITE;
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
INSERT INTO `sys_user` VALUES (1,1,'admin','7cfcb7c9bd442bf352ffc8847f509a2a807ef627dcd243deb508b3f4bc1cea9bbddb746c671588d2d030893d1cf8d824938a8c390a34c74b9754f3519254907b','4085442787',1,'admin',1,1,1,'qudansdl@gmail.com',0,0,0,'2022-04-15 07:44:16','127.0.0.1',57,0,'1','2019-01-01 00:00:00','2022-04-15 07:44:16');
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_user_token`
--

DROP TABLE IF EXISTS `sys_user_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_user_token` (
  `auth_token` varchar(40) NOT NULL COMMENT '로그인 인증',
  `site_id` smallint(6) NOT NULL COMMENT '사이트 ID',
  `user_id` bigint(20) NOT NULL COMMENT '사용자 ID',
  `channel` varchar(50) NOT NULL COMMENT '채널',
  `create_date` datetime NOT NULL COMMENT '생성일',
  `expiry_date` datetime DEFAULT NULL COMMENT '만료일',
  `login_ip` varchar(130) NOT NULL COMMENT '로그인 IP',
  `update_date` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`auth_token`),
  KEY `sys_user_token_user_id` (`user_id`),
  KEY `sys_user_token_create_date` (`create_date`),
  KEY `sys_user_token_channel` (`channel`),
  KEY `sys_user_token_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사용자 토큰';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_user_token`
--

LOCK TABLES `sys_user_token` WRITE;
/*!40000 ALTER TABLE `sys_user_token` DISABLE KEYS */;
INSERT INTO `sys_user_token` VALUES ('099e5cdb-05ca-4c46-aa09-fa7ccd8c6e11',1,1,'web_manager','2021-10-20 10:18:55','2021-11-19 10:18:55','127.0.0.1',NULL),('0ef84290-f677-4492-b8f2-e480fd1364d2',1,1,'web_manager','2021-10-05 10:07:19','2021-11-04 10:07:19','127.0.0.1',NULL),('1503b6d9-3f2f-4764-981c-c0278c1b3224',1,1,'web_manager','2022-04-15 07:26:07','2022-05-15 07:26:07','127.0.0.1','2022-04-15 07:26:07'),('1b94e7ca-6fee-4718-be16-981cdf740e65',1,1,'web_manager','2021-10-19 12:11:29','2021-11-18 12:11:29','127.0.0.1',NULL),('22c49594-3149-411e-9c9f-e716deafda8c',1,1,'web_manager','2021-10-08 15:00:21','2021-11-07 15:00:21','127.0.0.1',NULL),('25cba530-8fbd-4434-9c49-e4a0ab44c68a',1,1,'web_manager','2022-04-05 10:12:30','2022-05-05 10:12:30','127.0.0.1',NULL),('29d1cd8f-c998-4a79-8da1-94a2e8b9792e',1,1,'web_manager','2021-10-12 16:31:02','2021-11-11 16:31:02','127.0.0.1',NULL),('2d8defec-e8ce-478e-b743-cad8dea6a460',1,1,'web_manager','2022-04-13 07:09:45','2022-05-13 07:09:45','127.0.0.1',NULL),('2df274c8-3921-4505-8823-039364c0e360',1,1,'web_manager','2021-10-12 13:58:11','2021-11-11 13:58:11','127.0.0.1',NULL),('2fda402c-570e-44b1-99ae-c170d7b82d26',1,1,'web_manager','2022-04-14 11:25:45','2022-05-14 11:25:45','127.0.0.1','2022-04-14 11:25:45'),('3bffa5d9-d180-483e-b22e-cfd316ba0717',1,1,'web_manager','2021-10-14 14:58:00','2021-11-13 14:58:00','127.0.0.1',NULL),('40cb2fd0-5f7e-4e08-a58e-6b5243787507',1,1,'web_manager','2021-10-01 09:47:01','2021-10-31 09:47:01','127.0.0.1',NULL),('40fab0b8-ad35-4454-9dfb-4bef8a7b6a93',1,1,'web_manager','2022-04-14 11:26:06','2022-05-14 11:26:06','127.0.0.1','2022-04-14 11:26:06'),('4878b582-7abd-4679-8508-e3d00765aab9',1,1,'web_manager','2022-03-30 16:16:46','2022-04-29 16:16:46','127.0.0.1',NULL),('49778356-70be-4593-93d7-108f0388f54e',1,1,'web_manager','2022-04-13 06:57:39','2022-05-13 06:57:39','127.0.0.1',NULL),('4fbcb065-1d71-4e63-8312-7b082e7787c6',1,1,'web_manager','2022-03-31 09:00:57','2022-04-30 09:00:57','127.0.0.1',NULL),('53912c56-6d5e-4bf7-aa7a-03f64a044956',1,1,'web_manager','2022-04-14 16:19:16','2022-05-14 16:19:16','127.0.0.1','2022-04-14 16:19:16'),('5b73bdf5-61ff-48b1-a7f1-cd65dcd185cb',1,1,'web_manager','2022-03-30 16:14:54','2022-04-29 16:14:54','127.0.0.1',NULL),('610ab6ed-71ba-41f6-a83d-1a8580e0ed2c',1,1,'web_manager','2021-10-08 13:42:00','2021-11-07 13:42:00','127.0.0.1',NULL),('67e0081c-cdaf-4097-af55-ba4da1dc6576',1,1,'web_manager','2021-10-20 08:04:26','2021-11-19 08:04:26','127.0.0.1',NULL),('6e711a0b-d201-4e30-b2aa-f6535e9a9a7e',1,1,'web_manager','2021-10-13 17:20:19','2021-11-12 17:20:19','127.0.0.1',NULL),('78bc8980-a857-402f-a3c4-410798715b5c',1,1,'web_manager','2022-03-30 16:14:49','2022-04-29 16:14:49','127.0.0.1',NULL),('7bdf892c-683a-4ce4-8ae9-8c4807a17b4e',1,1,'web_manager','2022-04-14 10:54:14','2022-05-14 10:54:14','127.0.0.1','2022-04-14 10:54:14'),('826f0f58-3bda-4dd3-be6c-e52caddf22f6',1,1,'web_manager','2022-04-05 09:05:36','2022-05-05 09:05:36','127.0.0.1',NULL),('8905a5d1-ef29-4aa0-83a2-5eec6c01b83a',1,1,'web_manager','2022-03-30 16:21:01','2022-04-29 16:21:01','127.0.0.1',NULL),('a92df912-7d2d-4e16-b088-0c81e1597b97',1,1,'web_manager','2021-10-13 10:26:23','2021-11-12 10:26:23','127.0.0.1',NULL),('abb24cd1-65e4-413c-bda6-c2983374a11a',1,1,'web_manager','2022-04-14 11:26:52','2022-05-14 11:26:52','127.0.0.1','2022-04-14 11:26:52'),('ae6a7bdf-4894-49c2-b77e-fe9fa6578947',1,1,'web_manager','2021-10-18 09:21:16','2021-11-17 09:21:16','127.0.0.1',NULL),('b15e3d66-d8e0-478d-93b2-da04216ad8d4',1,1,'web_manager','2022-04-12 09:29:59','2022-05-12 09:29:59','127.0.0.1',NULL),('b9e9a8b7-b719-4149-9aaa-a0d4fe0c8a32',1,1,'web_manager','2022-03-30 15:35:08','2022-04-29 15:35:08','127.0.0.1',NULL),('bba1e3e7-f47a-47af-930c-a6a8eabcce42',1,1,'web_manager','2022-04-14 08:32:58','2022-05-14 08:32:58','127.0.0.1','2022-04-14 08:32:58'),('c256d585-5bc9-49ba-b092-c61976991a20',1,1,'web_manager','2021-10-20 11:03:04','2021-11-19 11:03:04','127.0.0.1',NULL),('c28148fe-28a6-4ad8-857b-1bba39592b6c',1,1,'web_manager','2021-10-13 17:56:44','2021-11-12 17:56:44','127.0.0.1',NULL),('c4c3e2dc-27a7-4a8c-bb6f-3e3b25a98ebc',1,1,'web_manager','2022-04-12 05:34:24','2022-05-12 05:34:24','127.0.0.1',NULL),('c5d65281-7cc5-46ba-a180-bf0bf9cb47be',1,1,'web_manager','2022-04-12 11:20:27','2022-05-12 11:20:27','127.0.0.1',NULL),('d071960e-aac3-499e-8e1e-741a94260fb0',1,1,'web_manager','2022-03-30 16:18:31','2022-04-29 16:18:31','127.0.0.1',NULL),('dc7f1a74-964b-455f-89da-867a2e6434ee',1,1,'web_manager','2022-04-14 11:25:34','2022-05-14 11:25:34','127.0.0.1','2022-04-14 11:25:34'),('ebb12c23-2d95-45df-a65e-1220c70c6917',1,1,'web_manager','2021-10-08 12:12:57','2021-11-07 12:12:57','127.0.0.1',NULL),('ec9b9631-129e-4d5c-84c2-12ac39924d86',1,1,'web_manager','2022-03-30 16:18:54','2022-04-29 16:18:54','127.0.0.1',NULL),('ed7b6103-c25f-467c-a890-c3549a246bca',1,1,'web_manager','2022-04-14 11:26:08','2022-05-14 11:26:08','127.0.0.1','2022-04-14 11:26:08'),('ed9a0df9-d17f-4c5b-b36d-494f8e0a284b',1,1,'web_manager','2021-10-01 10:38:05','2021-10-31 10:38:05','127.0.0.1',NULL),('ee2f4714-2184-4a32-840a-d73dea152b44',1,1,'web_manager','2022-03-30 16:19:05','2022-04-29 16:19:05','127.0.0.1',NULL),('eedf2bb5-cbcb-4002-bb3d-be1c72de0ee6',1,1,'web_manager','2021-10-01 09:45:54','2021-10-31 09:45:54','127.0.0.1',NULL),('f4e1d759-7ad1-4872-8f2a-6c8c9debe9ce',1,1,'web_manager','2022-04-15 07:44:16','2022-05-15 07:44:16','127.0.0.1','2022-04-15 07:44:16');
/*!40000 ALTER TABLE `sys_user_token` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15 10:05:05
