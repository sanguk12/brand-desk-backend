-- ----------------------------
-- Records of cms_category
-- ----------------------------
INSERT INTO `cms_category` VALUES (1, 3, '데모', NULL, NULL, '17,15,12,9,8,7,6,18', '', 'demonstrate', '/category/parent.html', '${category.code}/index.html', 0, 1, 'demonstrate/index.html', '${content.publishDate?string(\'yyyy/MM/dd\')}/${content.id}.html', 1, 10, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (6, 3, '자동차', 1, NULL, NULL, '', 'car', '/category/list.html', '${category.code}/index.html', 0, 1, 'car/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 10, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (7, 3, '사회', 1, NULL, NULL, '', 'social', '/category/list.html', '${category.code}/index.html', 0, 1, 'social/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 10, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (8, 3, '이미지', 1, NULL, NULL, '', 'picture', '/category/list.html', '${category.code}/index.html', 0, 1, 'picture/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 10, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (9, 3, '시스템 소개', 1, NULL, NULL, '', 'introduction', '/category/list.html', '${category.code}/index.html', 0, 1, 'introduction/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 10, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (12, 3, '글', 1, NULL, NULL, '', 'article', '/category/list.html', '${category.code}/index.html', 0, 1, 'article/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (15, 3, '소설', 1, NULL, NULL, '', 'novel', '/category/list.html', '${category.code}/index.html', 0, 1, 'novel/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (17, 3, '과학 설명', 1, NULL, NULL, '', 'science', '/category/list.html', '${category.code}/index.html', 0, 1, 'science/index.html', '${category.code}/${content.publishDate?string(\'yyyy/MM-dd\')}/${content.id}.html', 1, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (19, 3, '사례', NULL, NULL, NULL, '', 'case', '/category/parent.html', '${category.code}/index.html', 0, 1, 'case/index.html', '${content.publishDate?string(\'yyyy/MM/dd\')}/${content.id}.html', 1, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (71, 2, '한국 칼럼', NULL, NULL, '73,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,120', '', 'ko', NULL, '#', 1, 0, '#', '', 0, 20, 0, 0, 1, 0, NULL);
INSERT INTO `cms_category` VALUES (72, 2, '영어 칼럼', NULL, NULL, '74,76,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,121', '', 'en', NULL, '#', 1, 0, '#', '', 0, 20, 0, 0, 1, 0, NULL);
INSERT INTO `cms_category` VALUES (73, 2, '그룹 프로필', 71, NULL, '75,77,78,79,80,81', '', 'about', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>category/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'category/75', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (74, 2, 'Introduction', 72, NULL, '76,99,100,101,102,103', '', 'introduction', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>en/category/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'en/category/76', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (75, 2, '그룹 프로필', 73, 1, NULL, '', 'aboutUS', NULL, 'category/${category.id}', 0, 0, 'category/75', 'content/${content.id}', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (76, 2, 'Introduction', 74, 1, NULL, '', 'introductionUS', NULL, 'en/category/${category.id}', 0, 0, 'en/category/76', 'en/content/${content.id}', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (77, 2, '핵심 팀', 73, 1, NULL, '', 'tuandui', NULL, 'category/${category.id}', 0, 0, 'category/77', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (78, 2, '조직', 73, 1, NULL, '', 'jiagou', NULL, 'category/${category.id}', 0, 0, 'category/78', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (79, 2, '그룹 명예', 73, 1, NULL, '', 'rongyu', NULL, 'category/${category.id}', 0, 0, 'category/79', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (80, 2, '사회적 책임', 73, 1, NULL, '', 'zeren', NULL, 'category/${category.id}', 0, 0, 'category/80', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (81, 2, '개발 목표', 73, 1, NULL, '', 'mubiao', NULL, 'category/${category.id}', 0, 0, 'category/81', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (82, 2, '뉴스', 71, NULL, '83,84', '', 'news', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>news/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'news/83', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (83, 2, '산업 정보', 82, NULL, NULL, '', 'hangye', NULL, 'news/${category.id}', 0, 0, 'news/83', 'content/${content.id}', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (84, 2, '회사 뉴스', 82, NULL, NULL, '', 'gongsi', NULL, 'news/${category.id}', 0, 0, 'news/84', 'content/${content.id}', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (85, 2, '그룹 산업', 71, NULL, '86,87,88,89,90,91', '', 'industry', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>category/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'category/86', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (86, 2, '투자 관리', 85, 1, NULL, '', 'touzi', NULL, 'category/${category.id}', 0, 0, 'category/86', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (87, 2, '주택 건설', 85, 1, NULL, '', 'jianshe', NULL, 'category/${category.id}', 0, 0, 'category/87', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (88, 2, '에너지 광전자 공학', 85, 1, NULL, '', 'nengyuan', NULL, 'category/${category.id}', 0, 0, 'category/88', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (89, 2, '현대 물류', 85, 1, NULL, '', 'wuliu', NULL, 'category/${category.id}', 0, 0, 'category/89', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (90, 2, '바이오 제약', 85, 1, NULL, '', 'zhiyao', NULL, 'category/${category.id}', 0, 0, 'category/90', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (91, 2, '현대 농업', 85, 1, NULL, '', 'nongye', NULL, 'category/${category.id}', 0, 0, 'category/91', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (92, 2, '인재 센터', 71, NULL, '93,94,95,96', '', 'rencai', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>news/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'news/93', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (93, 2, '인재 채용', 92, NULL, NULL, '', 'zhaopin', NULL, 'news/${category.id}', 0, 0, 'news/93', 'content/${content.id}', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (94, 2, '재능 개념', 92, 1, NULL, '', 'linian', NULL, 'category/${category.id}', 0, 0, 'category/94', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (95, 2, '급여 및 혜택', 92, 1, NULL, '', 'fuli', NULL, 'category/${category.id}', 0, 0, 'category/95', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (96, 2, '경력 개발', 92, 1, NULL, '', 'fazhan', NULL, 'category/${category.id}', 0, 0, 'category/96', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (97, 2, '문의하기', 71, NULL, '120', '', 'linaxi', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>category/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'category/120', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (99, 2, 'Core team', 74, 1, NULL, '', 'team', NULL, 'en/category/${category.id}', 0, 0, 'en/category/99', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (100, 2, 'Organization', 74, 1, NULL, '', 'organization', NULL, 'en/category/${category.id}', 0, 0, 'en/category/100', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (101, 2, 'Group honor', 74, 1, NULL, '', 'honor', NULL, 'en/category/${category.id}', 0, 0, 'en/category/101', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (102, 2, 'Social responsibility', 74, 1, NULL, '', 'responsibility', NULL, 'en/category/${category.id}', 0, 0, 'en/category/102', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (103, 2, 'Development goals', 74, 1, NULL, '', 'goals', NULL, 'en/category/${category.id}', 0, 0, 'en/category/103', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (104, 2, 'News', 72, NULL, '105,106', '', 'news_en', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>en/news/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'en/news/105', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (105, 2, 'Industry News', 104, NULL, NULL, '', 'industry_en', NULL, 'en/news/${category.id}', 0, 0, 'en/news/105', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (106, 2, 'Company news', 104, NULL, NULL, '', 'company', NULL, 'en/news/${category.id}', 0, 0, 'en/news/106', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (107, 2, 'Industry', 72, NULL, '108,109,110,111,112,113', '', 'group_industry', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>en/category/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'en/category/108', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (108, 2, 'Investment Management', 107, 1, NULL, '', 'investment', NULL, 'en/category/${category.id}', 0, 0, 'en/category/108', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (109, 2, 'Home ownership', 107, 1, NULL, '', 'ownership', NULL, 'en/category/${category.id}', 0, 0, 'en/category/109', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (110, 2, 'Energy photoelectric', 107, 1, NULL, '', 'photoelectric', NULL, 'en/category/${category.id}', 0, 0, 'en/category/110', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (111, 2, 'Modern logistics', 107, 1, NULL, '', 'logistics', NULL, 'en/category/${category.id}', 0, 0, 'en/category/111', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (112, 2, 'Biopharmaceutical', 107, 1, NULL, '', 'biopharmaceutical', NULL, 'en/category/${category.id}', 0, 0, 'en/category/112', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (113, 2, 'Modern agriculture', 107, 1, NULL, '', 'agriculture', NULL, 'en/category/${category.id}', 0, 0, 'en/category/113', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (114, 2, 'Talent', 72, NULL, '115,116,117,118', '', 'talent', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>en/news/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'en/news/115', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (115, 2, 'Recruitment', 114, NULL, NULL, '', 'recruitment', NULL, 'en/news/${category.id}', 0, 0, 'en/news/115', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (116, 2, 'Talent Concept', 114, 1, NULL, '', 'concept', NULL, 'en/category/${category.id}', 0, 0, 'en/category/116', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (117, 2, 'Remuneration and benefits', 114, 1, NULL, '', 'benefits', NULL, 'en/category/${category.id}', 0, 0, 'en/category/117', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (118, 2, 'Career Development', 114, 1, NULL, '', 'career', NULL, 'en/category/${category.id}', 0, 0, 'en/category/118', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (119, 2, 'Contact', 72, NULL, '121', '', 'contact', NULL, '<@_categoryList parentId=category.id><#if page.totalCount gt 0>en/category/${page.list[0].id}</#if></@_categoryList>', 0, 0, 'en/category/121', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (120, 2, '문의하기', 97, 1, NULL, '', 'contact_us', NULL, 'category/${category.id}', 0, 0, 'category/120', '', 0, 20, 0, 0, 0, 0, NULL);
INSERT INTO `cms_category` VALUES (121, 2, 'Contact us', 119, 1, NULL, '', 'contact_us_en', NULL, 'en/category/${category.id}', 0, 0, 'en/category/121', '', 0, 20, 0, 0, 0, 0, NULL);

-- ----------------------------
-- Records of cms_category_attribute
-- ----------------------------
INSERT INTO `cms_category_attribute` VALUES (1, '데모', 'SyncCMS,사용하는 방법', 'SyncCMS 사용 방법', NULL);
INSERT INTO `cms_category_attribute` VALUES (6, '자동차 공공 CMS', '자동차,car', '차', NULL);
INSERT INTO `cms_category_attribute` VALUES (7, '사회', '사회', '사회', NULL);
INSERT INTO `cms_category_attribute` VALUES (8, '이미지', '아름다움 이미지', '아름다운 이미지', NULL);
INSERT INTO `cms_category_attribute` VALUES (9, '시스템 소개', 'SyncCMS,시스템 소개', 'SyncCMS 시스템 소개', NULL);
INSERT INTO `cms_category_attribute` VALUES (12, '글', '글', '글', NULL);
INSERT INTO `cms_category_attribute` VALUES (15, '소설', '소설,온라인으로 읽기', '소설,온라인으로 읽기', NULL);
INSERT INTO `cms_category_attribute` VALUES (17, '과학 기술', '과학 기술', '기술 채널', NULL);
INSERT INTO `cms_category_attribute` VALUES (19, '사례', 'SyncCMS 사례', 'SyncCMS 사례', NULL);
INSERT INTO `cms_category_attribute` VALUES (71, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (72, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (73, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (74, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (75, '', '', '', '{\"article\":\"<p>스테판으로 스테판으로 스테판으로 스테판으로 스테판으로 Stephen 역 Stephen 역 Stephen 역 Stephen 역 Stephen 역 Stephen 역 Stephen 역 Stephen 역 Stephen 역</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (76, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (77, '', '', '', '{\"article\":\"<p>코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀 코어 팀</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (78, '', '', '', '{\"article\":\"<p>조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조 조직 구조</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (79, '', '', '', '{\"article\":\"<h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_3.html\\\" title=\\\"그룹 명예\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">그룹 명예</a></h2><p><br/></p>\"}');
INSERT INTO `cms_category_attribute` VALUES (80, '', '', '', '{\"article\":\"<p>사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임 사회적 책임</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (81, '', '', '', '{\"article\":\"<h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><h2 class=\\\"R-h2\\\" style=\\\"padding: 0px 0px 0px 15px; margin: 0px; clear: both; overflow: hidden; height: 21px; line-height: 21px; border-bottom: 1px solid rgb(51, 51, 153); font-family: ΢���ź�; font-size: 14px; background: url(&quot;../images/r_top.gif&quot;) 2px center no-repeat rgb(255, 255, 255); color: rgb(68, 68, 68); white-space: normal;\\\"><a href=\\\"file:///E:/Users/kerneler/OneDrive/synccms/html/%E8%93%9D%E8%89%B2%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8PC%E7%AB%99%E7%82%B9%E9%9D%99%E6%80%81%E9%A1%B5/about_5.html\\\" title=\\\"개발 목표\\\" style=\\\"padding: 0px; margin: 0px; text-decoration-line: none; font-size: 12px; color: rgb(68, 68, 68);\\\">개발 목표</a></h2><p><br/></p>\"}');
INSERT INTO `cms_category_attribute` VALUES (82, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (83, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (84, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (85, '', '', '', '{\"article\":\"<p>그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업 그룹 산업</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (86, '', '', '', '{\"article\":\"<p>투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리 투자 관리</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (87, '', '', '', '{\"article\":\"<p>부동산 건설 설정 부동산 건설</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (88, '', '', '', '{\"article\":\"<p>광전 에너지 광전 에너지 광전 에너지 광전 에너지 광전 에너지</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (89, '', '', '', '{\"article\":\"<p>현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류 현대 물류</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (90, '', '', '', '{\"article\":\"<p>바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 바이오 제약 (Biopharmaceutical Biopharmaceutical Biopharmaceutical Biopharmaceutical Biopharmaceutical Biopharmaceutical Biopharmaceutical</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (91, '', '', '', '{\"article\":\"<p>현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업 현대 농업</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (92, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (93, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (94, '', '', '', '{\"article\":\"<p>재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념 재능 개념</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (95, '', '', '', '{\"article\":\"<p>급여 및 복지 급여 및 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 및 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지 급여 복지</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (96, '', '', '', '{\"article\":\"<p>경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발 경력 개발</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (97, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (99, '', '', '', '{\"article\":\"<p>Core teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore teamCore team</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (100, '', '', '', '{\"article\":\"<p>OrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganizationOrganization</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (101, '', '', '', '{\"article\":\"<p>Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor Group honor Group honor Group honor Group honor Group honor Group honor&nbsp;Group honor&nbsp;Group honor Group honor Group honor&nbsp;Group honor&nbsp;Group honor&nbsp;Group honor Group honor Group honor Group honor Group honor&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (102, '', '', '', '{\"article\":\"<p>Social responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibilitySocial responsibility</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (103, '', '', '', '{\"article\":\"<p>Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;Development goals Development goals Development goals Development goals Development goals Development goals Development goals&nbsp;Development goals&nbsp;Development goals Development goals Development goals&nbsp;Development goals&nbsp;Development goals Development goals Development goals&nbsp;Development goals&nbsp;Development goals&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (104, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (105, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (106, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (107, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (108, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (109, '', '', '', '{\"article\":\"<p>Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;Home ownership&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (110, '', '', '', '{\"article\":\"<p>Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;Energy photoelectric&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (111, '', '', '', '{\"article\":\"<p>Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;Modern logistics&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (112, '', '', '', '{\"article\":\"<p>Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;Biopharmaceutical&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (113, '', '', '', '{\"article\":\"<p>Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;Modern agriculture&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (114, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (115, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (116, '', '', '', '{\"article\":\"<p>Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;Talent Concept&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (117, '', '', '', '{\"article\":\"<p>Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;Remuneration and benefits&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (118, '', '', '', '{\"article\":\"<p>Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;Career Development&nbsp;</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (119, '', '', '', NULL);
INSERT INTO `cms_category_attribute` VALUES (120, '', '', '', '{\"article\":\"<p>문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기 문의하기</p>\"}');
INSERT INTO `cms_category_attribute` VALUES (121, '', '', '', '{\"article\":\"<p>Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;Contact us&nbsp;</p>\"}');

-- ----------------------------
-- Records of cms_category_model
-- ----------------------------

INSERT INTO `cms_category_model` VALUES (6, '1', '/system/article.html');
INSERT INTO `cms_category_model` VALUES (6, '2', '');
INSERT INTO `cms_category_model` VALUES (6, '3', '/system/picture.html');
INSERT INTO `cms_category_model` VALUES (6, '5', '');
INSERT INTO `cms_category_model` VALUES (6, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (7, '1', '/system/article.html');
INSERT INTO `cms_category_model` VALUES (7, '2', '');
INSERT INTO `cms_category_model` VALUES (7, '3', '/system/picture.html');
INSERT INTO `cms_category_model` VALUES (7, '5', '');
INSERT INTO `cms_category_model` VALUES (7, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (8, '3', '/system/picture.html');
INSERT INTO `cms_category_model` VALUES (8, '5', '');
INSERT INTO `cms_category_model` VALUES (8, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (9, '1', '/system/article.html');
INSERT INTO `cms_category_model` VALUES (9, '2', '');
INSERT INTO `cms_category_model` VALUES (9, '3', '/system/picture.html');
INSERT INTO `cms_category_model` VALUES (9, '5', '');
INSERT INTO `cms_category_model` VALUES (9, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (12, '1', '/system/article.html');
INSERT INTO `cms_category_model` VALUES (12, '2', '');
INSERT INTO `cms_category_model` VALUES (12, '5', '');
INSERT INTO `cms_category_model` VALUES (12, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (14, '5', '');
INSERT INTO `cms_category_model` VALUES (14, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (15, '4', '/system/book.html');
INSERT INTO `cms_category_model` VALUES (15, '5', '');
INSERT INTO `cms_category_model` VALUES (15, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (16, '5', '');
INSERT INTO `cms_category_model` VALUES (16, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (17, '1', '/system/article.html');
INSERT INTO `cms_category_model` VALUES (17, '2', '');
INSERT INTO `cms_category_model` VALUES (17, '3', '/system/picture.html');
INSERT INTO `cms_category_model` VALUES (17, '5', '');
INSERT INTO `cms_category_model` VALUES (17, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (18, '5', '');
INSERT INTO `cms_category_model` VALUES (18, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (18, '7', '');
INSERT INTO `cms_category_model` VALUES (18, '8', '');
INSERT INTO `cms_category_model` VALUES (19, '2', '');
INSERT INTO `cms_category_model` VALUES (19, '5', '');
INSERT INTO `cms_category_model` VALUES (19, '6', '/system/chapter.html');
INSERT INTO `cms_category_model` VALUES (76, 'article', NULL);
INSERT INTO `cms_category_model` VALUES (83, 'article', NULL);
INSERT INTO `cms_category_model` VALUES (84, 'article', NULL);
INSERT INTO `cms_category_model` VALUES (93, 'article', NULL);

-- ----------------------------
-- Records of cms_category_type
-- ----------------------------
INSERT INTO `cms_category_type`(id, site_id, name, code, sort, extend_id)  VALUES (1, 2, '글이 있는 카테고리', 'with_article', 0, 1);

-- ----------------------------
-- Records of cms_content
-- ----------------------------
INSERT INTO `cms_content` VALUES (1, 3, 'SyncCMS 템플릿 사용 가이드', 3, 3, 12, '1', NULL, NULL, 0, 0, NULL, '', 0, 0, 0, 1, 'article/2020/01-01/1.html', 'SyncCMS 웹 사이트 템플릿입니다.', '', NULL, NULL, 0, 1, 0, 79, '2020-01-01 00:00:00', NULL, '2020-01-01 00:00:00', NULL, '2020-01-01 00:00:00', 0, 1, 0);
INSERT INTO `cms_content` VALUES (2, 2, '영어 및 한국어로 된 엔터프라이즈 사이트 템플릿 사용 가이드', 2, 2, 84, 'article', NULL, NULL, 0, 0, NULL, NULL, 0, 0, 0, 0, 'content/2', '기본 페이지 템플릿 index.html은 기업의 한국어 및 영어 사이트 템플릿의 기본 페이지 템플릿입니다.,기사 템플릿 content.html, 카테고리 단일 페이지 템플릿 category.html, 카테고리 콘텐츠 목록 페이지 news.html\n\n한국어와 영어로 된 두 세트의 템플릿으로 나뉩니다.\n\n모든 템플릿은 동적 템플릿, 기사, 카테고리 템플릿은 매개 변수를 ID로 허용합니다.,pageIndex 등, 둘 다 뉴스와 같은 나머지 스타일 URL을 지원합니다./1_12,news.html과 같은 전통적인 매개 변수 유형도 지원합니까?id=1&pageIndex=12\n\n카테고리에서 기사가있는 카테고리에는 category.html을, 콘텐츠 목록에는 news.html을 사용할 수 있습니다. 카테고리 액세스 경로를 템플릿 이름으로 입력하세요./$ {category.id} 또는 템플릿 name.html?id=${category.id}', '', NULL, NULL, 0, 0, 0, 1, '2020-01-01 00:00:00', NULL, '2020-01-01 00:00:00', NULL, '2020-01-01 00:00:00', 0, 1, 0);

-- ----------------------------
-- Records of cms_content_attribute
-- ----------------------------
INSERT INTO `cms_content_attribute` VALUES (1, NULL, NULL, NULL, '   SyncCMS 공식 웹 사이트 템플릿은 정적 템플릿의 집합입니다. 현재 SyncCMS 웹 사이트에서 사용되는 템플릿입니다. 카테고리 디렉토리는 카테고리 템플릿, ftl 디렉토리는 템플릿 조각, 멤버는 로그인, 등록, 댓글, 개인 페이지 등과 같은 동적 템플릿입니다. 검색 템플릿. 시스템에는 네 가지 유형의 콘텐츠 템플릿이 있습니다. Index.html은 동적 또는 정적을 지원하는 홈페이지 템플릿입니다. Sitemap.xml은 사이트 맵 템플릿입니다. 새 범주를 만들 때 범주에서 범주 정적 템플릿을 선택할 수 있습니다. 하나, 정적 액세스 경로를 설정하는 콘텐츠 템플릿은 시스템에서 하나를 선택하고 정적 액세스 경로를 설정할 수 있습니다.그중 article.html은 기사, picture.html은 이미지, book.html 및 chapter.html은 책과 장입니다.', '<p>&nbsp;&nbsp;&nbsp;&nbsp;SyncCMS 공식 웹 사이트 템플릿은 정적 템플릿의 집합으로 현재SyncCMS 공식 웹 사이트에서 사용되는 템플릿입니다.</p><p><img src=\"//site3.nudejava.net:8080/synccms/webfile/upload/2020/03-24/12-28-500720-90407063.png\" title=\"1.png\" alt=\"1.png\"/></p><p>category目录下为분류模板，ftl目录下为템플릿 조각，member下예动态模板有로그인、등기、논평、개인적인페이지等</p><p>search는 검색 템플릿으로 시스템에는 4 가지 유형의 콘텐츠 템플릿이 있으며 Index.html은 동적 또는 정적을 지원하는 홈페이지 템플릿이고 sitemap.xml은 사이트 맵 템플릿입니다.</p><p>새 카테고리를 생성 할 때 카테고리에서 카테고리 정적 템플릿 중 하나를 선택하고 정적 액세스 경로를 설정할 수 있습니다.</p><p><img src=\"//site3.dev.synccms.com:8080/synccms/webfile/upload/2020/03-24/12-32-2905711856271141.png\" title=\"2.png\" alt=\"2.png\"/></p><p>그중 article.html은 기사, picture.html은 이미지, book.html 및 chapter.html은 책과 장입니다.</p><p><img src=\"//site3.dev.synccms.com:8080/synccms/webfile/upload/2020/03-24/12-32-36030545988429.png\" title=\"3.png\" alt=\"3.png\"/></p>', 318);
INSERT INTO `cms_content_attribute` VALUES (2, NULL, NULL, NULL, NULL, '<p>기본 페이지 템플릿 index.html은 기업의 한국어 및 영어 사이트 템플릿의 기본 페이지 템플릿입니다.,기사 템플릿 content.html, 카테고리 단일 페이지 템플릿 category.html, 카테고리 콘텐츠 목록 페이지 news.html</p>\n\n<p>한국어와 영어로 된 두 세트의 템플릿으로 나뉩니다.</p>\n\n<p>모든 템플릿은 동적 템플릿, 기사, 카테고리 템플릿은 매개 변수를 ID로 허용합니다.,pageIndex 등, 둘 다 뉴스와 같은 나머지 스타일 URL을 지원합니다./1_12,news.html과 같은 전통적인 매개 변수 유형도 지원합니까?id=1&amp;pageIndex=12</p>\n\n<p>카테고리에서 기사가있는 카테고리에는 category.html을, 콘텐츠 목록에는 news.html을 사용할 수 있습니다. 카테고리 액세스 경로를 템플릿 이름으로 입력하세요./$ {category.id} 또는 템플릿 name.html?id=${category.id}</p>\n', 301);

-- ----------------------------
-- Records of cms_place
-- ----------------------------
INSERT INTO `cms_place` VALUES (1, 3, '/index.html/94fe86e5-45b3-4896-823a-37c6d7d6c578.html', 3, 3, 'custom', NULL, '공개 CMS 시작 순서도', '//www.nudejava.net/version/2016/11-24/252.html', '//www.nudejava.net/2016/11/29/15-25-440266448369330.jpg', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 6, 0);
INSERT INTO `cms_place` VALUES (2, 3, '/index.html/94fe86e5-45b3-4896-823a-37c6d7d6c578.html', 3, 3, 'custom', NULL, '식도락가', '//www.nudejava.net/picture/2015/08-13/159.html', '//www.nudejava.net/2015/11/15/17-35-150887-240130090.jpg', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 4, 0);
INSERT INTO `cms_place` VALUES (3, 3, '/index.html/94fe86e5-45b3-4896-823a-37c6d7d6c578.html', 3, 3, 'custom', NULL, '자동차', '//www.nudejava.net/car/2015/08-06/9.html', '//www.nudejava.net/2015/11/15/17-35-0606061972977756.jpg', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 8, 0);
INSERT INTO `cms_place` VALUES (4, 3, '/index.html/94fe86e5-45b3-4896-823a-37c6d7d6c578.html', 3, 3, 'custom', NULL, 'SyncCMS 시스템 사용자 매뉴얼 다운로드', '//www.nudejava.net/help/2015/10-09/179.html', '//www.nudejava.net/2015/11/15/17-34-560426-203327271.jpg', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 18, 0);
INSERT INTO `cms_place` VALUES (6, 3, '/category/list.html/3435e9a7-565a-4f93-8670-9c272a1d51cc.html', 3, 3, 'custom', NULL, '아름다운 애니메이션 사진', '//www.nudejava.net/picture/2015/08-06/4.html', '//www.nudejava.net/2015/08/07/11-24-1308292097994334.jpg', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 4, 0);
INSERT INTO `cms_place` VALUES (7, 3, '/category/list.html/3435e9a7-565a-4f93-8670-9c272a1d51cc.html', 3, 3, 'custom', NULL, '자동차', '//www.nudejava.net/car/2015/08-06/9.html', '//www.nudejava.net/2015/08/07/11-24-3602801209954489.jpg', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 2, 0);
INSERT INTO `cms_place` VALUES (13, 2, '/ab53b388-be0e-4674-b631-e1de625c74ac.html', 2, 2, 'custom', NULL, '투자 관리', '#', 'assets/images/201210310952338421.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
INSERT INTO `cms_place` VALUES (14, 2, '/ab53b388-be0e-4674-b631-e1de625c74ac.html', 2, 2, 'custom', NULL, '주택 건설', '#', 'assets/images/201210310953075326.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
INSERT INTO `cms_place` VALUES (15, 2, '/ab53b388-be0e-4674-b631-e1de625c74ac.html', 2, 2, 'custom', NULL, '에너지 광전자 공학', '#', 'assets/images/201210310953287112.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
INSERT INTO `cms_place` VALUES (16, 2, '/ab53b388-be0e-4674-b631-e1de625c74ac.html', 2, 2, 'custom', NULL, '현대 물류', '#', 'assets/images/201210310953526760.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
INSERT INTO `cms_place` VALUES (17, 2, '/ab53b388-be0e-4674-b631-e1de625c74ac.html', 2, 2, 'custom', NULL, '바이오 제약', '#', 'assets/images/201209291145162884.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 21, 0);
INSERT INTO `cms_place` VALUES (18, 2, '/ab53b388-be0e-4674-b631-e1de625c74ac.html', 2, 2, 'custom', NULL, '현대 농업', '#', 'assets/images/201210091631452563.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
INSERT INTO `cms_place` VALUES (19, 2, '/505ddbed-f6ff-4a53-b5a8-0b2d7479a2ec.html', 2, 2, 'custom', NULL, 'SyncCMS', 'http://www.nudejava.net/', '', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 3, 0);
INSERT INTO `cms_place` VALUES (20, 2, '/e2ef0223-ddd3-4a95-bc65-c7eb796c911a.html', 2, 2, 'custom', NULL, 'OA', '#', 'assets/images/l_1.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
INSERT INTO `cms_place` VALUES (21, 2, '/e2ef0223-ddd3-4a95-bc65-c7eb796c911a.html', 2, 2, 'custom', NULL, '문의하기', '#', 'assets/images/l_2.gif', '2020-01-01 00:00:00', '2020-01-01 00:00:00', NULL, 1, 0, 0);
-- ----------------------------
-- Records of cms_place_attribute
-- ----------------------------
INSERT INTO `cms_place_attribute` VALUES (1, '{}');
INSERT INTO `cms_place_attribute` VALUES (2, '{}');
INSERT INTO `cms_place_attribute` VALUES (3, '{}');
INSERT INTO `cms_place_attribute` VALUES (4, '{}');
INSERT INTO `cms_place_attribute` VALUES (5, '{}');
INSERT INTO `cms_place_attribute` VALUES (6, '{}');
INSERT INTO `cms_place_attribute` VALUES (7, '{}');
INSERT INTO `cms_place_attribute` VALUES (8, '{}');
INSERT INTO `cms_place_attribute` VALUES (9, '{}');
INSERT INTO `cms_place_attribute` VALUES (10, '{}');
INSERT INTO `cms_place_attribute` VALUES (11, '{}');
INSERT INTO `cms_place_attribute` VALUES (12, '{}');
INSERT INTO `cms_place_attribute` VALUES (13, '{}');
INSERT INTO `cms_place_attribute` VALUES (14, '{}');
INSERT INTO `cms_place_attribute` VALUES (15, '{}');
INSERT INTO `cms_place_attribute` VALUES (16, '{}');
INSERT INTO `cms_place_attribute` VALUES (17, '{}');
INSERT INTO `cms_place_attribute` VALUES (18, '{}');
INSERT INTO `cms_place_attribute` VALUES (19, '{}');
INSERT INTO `cms_place_attribute` VALUES (20, '{}');
INSERT INTO `cms_place_attribute` VALUES (21, '{}');
INSERT INTO `cms_place_attribute` VALUES (22, '{}');

-- ----------------------------
-- Records of sys_config_data
-- ----------------------------
INSERT INTO `sys_config_data` VALUES (2, 'siteAttribute', '{\"logo\":\"assets/images/logo.gif\",\"parentId\":\"71\",\"parentId_en\":\"72\"}');
INSERT INTO `sys_config_data` VALUES (3, 'cors', '{\"allowed_origins\":\"*\",\"allowed_methods\":\"*\",\"allowed_headers\":\"*\",\"exposed_headers\":\"\",\"allow_credentials\":\"true\",\"max_age\":\"\"}');
INSERT INTO `sys_config_data` VALUES (3, 'site', '{\"return_url\":\"http://search.site3.nudejava.net/\",\"register_url\":\"http://site3.nudejava.net/register.html\",\"login_path\":\"http://site3.nudejava.net/login.html\",\"slogan\":\"고급\",\"statistics\":\"\",\"approve\":\"\"}');
INSERT INTO `sys_config_data` VALUES (3, 'siteAttribute', '{\"logo\":\"\",\"square_logo\":\"\",\"searchPath\":\"//search.nudejava.net/\"}');

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (2, 2, '시스템 운영', NULL, '', 2, 1000, 1, 1, 1);
INSERT INTO `sys_dept` VALUES (3, 3, '시스템 운영', NULL, '', 3, 1000, 1, 1, 1);

-- ----------------------------
-- Records of sys_domain
-- ----------------------------
INSERT INTO `sys_domain` VALUES ('search.site3.nudejava.net', 3, 0, '/search/');
INSERT INTO `sys_domain` VALUES ('site2.nudejava.net', 2, 1, '');
INSERT INTO `sys_domain` VALUES ('site3.nudejava.net', 3, 0, '/member/');

-- ----------------------------
-- Records of sys_extend
-- ----------------------------
INSERT INTO `sys_extend` VALUES (1, 'categoryType', 1);

-- ----------------------------
-- Records of sys_extend_field
-- ----------------------------
INSERT INTO `sys_extend_field` VALUES (1, 'article', 1, 0, NULL, '편집자', '', 'editor', '', NULL, 0);

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (2, 2, '웹 마스터', 1, 0);
INSERT INTO `sys_role` VALUES (3, 3, '웹 마스터', 1, 1);

-- ----------------------------
-- Records of sys_role_user
-- ----------------------------
INSERT INTO `sys_role_user` VALUES (2, 2);
INSERT INTO `sys_role_user` VALUES (3, 3);

-- ----------------------------
-- Records of sys_site
-- ----------------------------
INSERT INTO `sys_site` VALUES (2, NULL, '엔터프라이즈 한국어 및 영어 웹 사이트', 0, '//site2.nudejava.net/webfile/', 0, '//site2.nudejava.net/', 0);
INSERT INTO `sys_site` VALUES (3, NULL, 'SyncCMS 공식 웹 사이트', 1, '//site3.nudejava.net/webfile/', 0, '//site3.nudejava.net/', 0);

-- ----------------------------
-- Records of sys_task
-- ----------------------------
INSERT INTO `sys_task` VALUES (1, 3, '모든 페이지 재생성', 0, '0 0/2 * * ?', '모든 페이지 재생성', '/publishPage.task', NULL);
INSERT INTO `sys_task` VALUES (2, 3, '인덱스 생성', 0, '0 0 1 1 ? 2099', '모든 인덱스 다시 작성', '/reCreateIndex.task', NULL);
INSERT INTO `sys_task` VALUES (3, 3, '로그 정리', 0, '0 0 1 * ?', '3개월 이전 로그 정리', '/clearLog.task', NULL);
INSERT INTO `sys_task` VALUES (4, 3, '콘텐츠 페이지 재생성', 0, '0 0 1 1 ? 2099', '콘텐츠 페이지 재생성', '/publishContent.task', NULL);
INSERT INTO `sys_task` VALUES (5, 3, '모든 카테고리 페이지 재생성', 0, '0 0/6 * * ?', '모든 카테고리 페이지 재생성', '/publishCategory.task', NULL);
INSERT INTO `sys_task` VALUES (7, 3, '전체 사이트 재생성', 0, '0 0 1 1 ? 2099', '전체 사이트 재생성', '/publishAll.task', NULL);

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (2, 2, 'admin', '21232f297a57a5a743894a0e4a801fc3', NULL, 1, 'admin', 2, 1, '2', '', 0, 1, 0, '2020-01-01 00:00:00', '127.0.0.1', 0, '2020-01-01 00:00:00');
INSERT INTO `sys_user` VALUES (3, 3, 'admin', '21232f297a57a5a743894a0e4a801fc3', NULL, 1, 'admin', 3, 1, '3', '', 0, 1, 0, '2020-01-01 00:00:00', '127.0.0.1', 0, '2020-01-01 00:00:00');
