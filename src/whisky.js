const wineList = ["加拿大俱乐部","占边(美国)","四玫瑰(美国)","威特基(美国)","威雀(苏格兰)","尊美醇(爱尔兰)","布什米尔(爱尔兰)","帝王白方(苏格兰)","杰克丹尼(美国)","格兰特(苏格兰)","格兰菲迪(苏格兰)","欧肯特轩(苏格兰)","添宝15年(苏格兰)","百龄坛12年(苏格兰)","百龄坛17年(苏格兰)","百龄坛特纯(苏格兰)","皇冠(加拿大)","皇家礼炮(苏格兰)","红方(苏格兰)","芝华士12年(苏格兰)","芝华士18年(苏格兰)","顺风(苏格兰)","马谛氏尊者(苏格兰)","麦卡伦(苏格兰)","黑方(苏格兰)"]
const history = "whisky_history"
const dirName = "威士忌"
const wineInfoList = {
    "百龄坛12年(苏格兰)":"百龄坛始创于1827年的著名苏格兰威士忌品牌百龄坛，由乔治·百龄坛(George Ballantine) 先生19岁时在苏格兰首府爱丁堡酿造出的第一瓶佳酿。",
    "百龄坛17年(苏格兰)":"百龄坛始创于1827年的著名苏格兰威士忌品牌百龄坛，由乔治·百龄坛(George Ballantine) 先生19岁时在苏格兰首府爱丁堡酿造出的第一瓶佳酿。",
    "百龄坛特纯(苏格兰)":"百龄坛始创于1827年的著名苏格兰威士忌品牌百龄坛，由乔治·百龄坛(George Ballantine) 先生19岁时在苏格兰首府爱丁堡酿造出的第一瓶佳酿。",
    "布什米尔(爱尔兰)":"布什米尔创立于1608年，诞生了世界上第一个领有牌照的酒厂布什米尔酒厂(Bushmills)，不经泥炭熏制，在雪莉4只长时间酿造出，具有雪利香草等甜美而辛辣的味道。",
    "帝王白方(苏格兰)":"帝王由约翰德华 (John Dewar) 于1846年在苏格兰伯斯成立。后在老约翰的两个极富天赋的儿子 - 小约翰德华以及汤米德华的手中，品牌得以继承并发扬，成为苏格兰威士忌中的佼佼者。",
    "格兰菲迪(苏格兰)":"1886年，创始人威廉·格兰(William Grant)在苏格兰高地斯佩塞(Speyside)地区开始了他的梦想--创造\"山谷中最好的威士忌\"。Fiddich代表麋鹿及其奔放的激情，完整的涵义是\"鹿之谷\"。",
    "格兰特(苏格兰)":"创建于1887年的格兰特（Grant's）威士忌，是其中一道百年名牌，也是全球位居第四、欧洲排名第一的混合威士忌。",
    "黑方(苏格兰)":"黑方是由尊尼沃克(JohnnieWalker&SONS)公司装瓶的，由大概40种singlewhisky调配而成，每一种至少有12年陈的苏格兰威士忌。",
    "红方(苏格兰)":"红方（Johnnie Walker旗下品牌)红方是全球最畅销的苏格兰威士忌，在全球二百多个国家和地区广受年轻消费者欢迎。香味：烟熏麦芽、柔滑香草，颜色琥珀色。",
    "皇冠(加拿大)":"皇冠威士忌原来为纪念英皇佐治六世(King George VI)及玛利皇后(Queen Mary)于1929年访问加拿大而配制的皇冠威士忌，是目前世界上最畅销的优质加拿大威士忌.",
    "皇家礼炮(苏格兰)":"1953年，芝华士兄弟公司为向英国伊莉沙伯皇后加冕典礼致意，特别酿制\"皇家礼炮\"。\"皇家礼炮\"的名字来自向到访皇室人员鸣礼炮21响的风俗。这珍贵的二十一年陈酿威士忌，分别盛载红、绿、蓝及棕色瓷樽内，更显雍容华贵。",
    "加拿大俱乐部":"加拿大俱乐部于1898年被维多利亚女王当做御用酒，因而其标签上还印有英国皇室的徽章，调味原酒以裸麦为主要原料，基础威士忌是以玉米为主要原料，两者均需独自熟成3年以上，才能调和，并储藏内部烧烤过的木桶中陈年。",
    "杰克丹尼(美国)":"杰克·丹尼酒厂1866年诞生于美国田纳西州林芝堡，挑选最上等的玉米、黑麦及麦芽等全天然谷物，配合高山泉水酿制，不含人造成份。采用独特的枫木过滤方法，用新烧制的美国白橡木桶储存，让酒质散发天然独特的馥郁芬芳。",
    "马谛氏尊者(苏格兰)":"马谛氏瓶身的设计打破了数百年来传统威士忌瓶身非方即圆的框架，被视为“黄金活水”，金黄色酒液配上出自名师设计上圆下方的全新独特酒瓶，柔和不失稳重。",
    "麦卡伦(苏格兰)":"创立于1824年，采用古老珍贵麦种GoldPromise 大麦为原料，酿出的威士忌口感醇和，由于麦卡伦绝不添加人工原料，其浓郁醇厚的色调由雪梨木桶轻渗而来，有“单一纯麦威士忌酒中劳斯莱斯”的美誉。",
    "欧肯特轩(苏格兰)":"欧肯特轩是苏格兰低地古老的威士忌酒厂，三重蒸馏每一滴酒。欧肯特轩三桶单一麦芽威士忌先后于波本桶、欧罗素雪莉桶合PX雪莉桶中熟成，呈现出特有的诱人韵味。",
    "顺风(苏格兰)":"酒厂于1923年在英国苏格兰创办，是以年份窖藏至少18年以上，精选赖斯斯佩塞地区的威士忌，加上优质的谷物威士忌调配而成。色泽淡雅且口感顺滑，使用雪利酒的橡木桶发酵，有传统的雪利酒香，加上柔和的香草喝些许橡木味，使其风味更为平顺清醇。",
    "四玫瑰(美国)":"四玫瑰是用美国肯塔基州中部的土生谷物蒸酿，蕴藏在内层烧黑的橡木桶中，经过至少六年醇化期才酿制而成，酒味臻于完美。",
    "添宝15年(苏格兰)":"由苏格兰最古老的威士忌酿造者Haig氏一家于1890年创建，是麦芽威士忌与谷物威士忌的混合酒，口味柔滑、芬芳、带烟熏和泥煤味，三边酒瓶是其一直以来的标志性外观设计。",
    "威雀(苏格兰)":"是英国皇室远赴苏格兰狩猎威雀时，必定携带Gloag威士忌作为御寒及狩猎成功庆祝之用。",
    "威特基(美国)":"8年陈酿波本威士忌，以75%的美国甜玉米和13%的黑麦酿造，并在焦化白橡木桶中经过8年混合，酒体呈现剔透的琥珀色，带有浓郁的香草和焦油味道，酒体丰满，入口顺滑，劲力十足。",
    "占边(美国)":"1795年由jimbeam之父jacobbeam酿造，现在占边已成为波本威士忌的旗舰品牌，于2014被日本三得利公司收购。",
    "芝华士12年(苏格兰)":"产于苏格兰的芝华士(Chivas)威士忌，是拥有200多年悠久历史的芝华士兄弟奉献给世界的瑰宝，旗下拥有芝华士12年，芝华士18年，芝华士25年和芝华士J&J。色泽琥珀色，口感醇和，浓郁的蜂蜜苹果甜味，伴随香草、奶油与榛子温和的干果香",
    "芝华士18年(苏格兰)":"产于苏格兰的芝华士(Chivas)威士忌，是拥有200多年悠久历史的芝华士兄弟奉献给世界的瑰宝，旗下拥有芝华士12年，芝华士18年，芝华士25年和芝华士J&J。色泽琥珀色，口感醇和，浓郁的蜂蜜苹果甜味，伴随香草、奶油与榛子温和的干果香",
    "尊美醇(爱尔兰)":"1780年，约翰尊美醇在爱尔兰都柏林建立，没有苏格兰的烟熏味，口感清淡柔和。"
}