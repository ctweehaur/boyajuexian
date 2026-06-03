const quizQuestions = [
    {
        id: 1,
        textStructure: [{w: "下列", p: "xià liè"}, {w: "句子", p: "jù zi"}, "中，", {w: "加点字", p: "jiā diǎn zì"}, "“", {w: "鼓", p: "gǔ"}, "”", {w: "的", p: "de"}, {w: "正确", p: "zhèng què"}, {w: "含义", p: "hán yì"}, {w: "是", p: "shì"}, "？"],
        en: "What is the correct meaning of the word 'gǔ' in this text?",
        options: [
            { textStructure: [{w: "名词", p: "míng cí"}, "，", {w: "一种乐器", p: "yì zhǒng yuè qì"}, "（", {w: "鼓", p: "gǔ"}, "）"], en: "A noun, meaning a drum.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "现代汉语", p: "xiàn dài hàn yǔ"}, {w: "常当", p: "cháng dāng"}, {w: "名词", p: "míng cí"}, "，", {w: "这里", p: "zhè lǐ"}, {w: "是动词", p: "shì dòng cí"}, "。"], explanationEn: "Incorrect. While 'gǔ' means a drum in modern Chinese or Malay, here it is used as a verb." },
            { textStructure: [{w: "动词", p: "dòng cí"}, "，", {w: "弹奏", p: "tán zòu"}, "、", {w: "演奏", p: "yǎn zòu"}], en: "A verb, meaning to play a stringed instrument.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "鼓琴", p: "gǔ qín"}, "”", {w: "指的就是", p: "zhǐ jiù shì de"}, {w: "弹奏古琴", p: "tán zòu gǔ qín"}, "。"], explanationEn: "Correct. In classical Chinese, 'gǔ' acts as a verb meaning to play or pluck an instrument like the zither." },
            { textStructure: [{w: "动词", p: "dòng cí"}, "，", {w: "拍打", p: "pāi dǎ"}], en: "A verb, meaning to slap or beat.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "古琴", p: "gǔ qín"}, {w: "是用手弹", p: "shì yòng shǒu tán"}, "，", {w: "不是用手拍", p: "bú ... u shǒu pāi"}, "。"], explanationEn: "Incorrect. You pluck the strings of a zither; you do not slap or beat it like a drum." },
            { textStructure: [{w: "形容词", p: "xíng róng cí"}, "，", {w: "涨起来的", p: "zhǎng qǐ lái de"}], en: "An adjective, meaning swollen or bulging.", correct: false, explanationStructure: [{w: "字意", p: "zì yì"}, {w: "完全不符", p: "wán quán bù fú"}, "。"], explanationEn: "Incorrect. This meaning has absolutely no relevance to the context of music." }
        ]
    },
    {
        id: 2,
        textStructure: [{w: "文中", p: "wén zhōng"}, "“", {w: "伯牙所念，钟子期必得之", p: "bó yá suǒ niàn zhōng zǐ qī bì dé zhī"}, "”", {w: "中的", p: "zhōng de"}, "“", {w: "得", p: "dé"}, "”", {w: "字", p: "zì"}, {w: "意思是", p: "yì si shì"}, "？"],
        en: "What does the character 'dé' mean in this sentence?",
        options: [
            { textStructure: [{w: "得到", p: "dé dào"}, "、", {w: "捡到", p: "jiǎn dào"}, {w: "东西", p: "dōng xi"}], en: "To obtain or pick up a physical object.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这里", p: "zhè lǐ"}, {w: "不是指", p: "bú ... i zhǐ"}, {w: "拿到", p: "ná dào"}, {w: "具体的物品", p: "jù tǐ de wù pǐn"}, "。"], explanationEn: "Incorrect. This does not mean receiving a physical object or money." },
            { textStructure: [{w: "领会", p: "lǐng huì"}, "、", {w: "理解", p: "lǐ jiě"}, "、", {w: "明白", p: "míng bai"}], en: "To understand, comprehend, or capture the inner meaning.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "指钟子期", p: "zhǐ zhōng zǐ qī"}, {w: "总能听懂", p: "zǒng néng tīng dǒng"}, {w: "伯牙的心意", p: "bó yá de xīn yì"}, "。"], explanationEn: "Correct. Here, 'dé' means to fully understand or capture the emotion behind Boya's music." },
            { textStructure: [{w: "完成", p: "wán chéng"}, "、", {w: "做好", p: "zuò hǎo"}], en: "To finish or successfully complete a task.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "语法", p: "yǔ fǎ"}, {w: "带入", p: "dài rù"}, {w: "不通", p: "bù tōng"}, "。"], explanationEn: "Incorrect. This meaning makes the sentence ungrammatical." },
            { textStructure: [{w: "必须", p: "bì xū"}, "（", {w: "读作", p: "dú zuò"}, " děi）"], en: "Must / have to (pronounced 'děi').", correct: false, explanationStructure: [{w: "读音", p: "dú yīn"}, {w: "与词性", p: "yǔ cí xìng"}, {w: "均错误", p: "jūn cuò wù"}, "。"], explanationEn: "Incorrect. This mistakes it for an auxiliary verb meaning 'must', which is wrong." }
        ]
    },
    {
        id: 3,
        textStructure: [{w: "钟子期", p: "zhōng zǐ qī"}, {w: "听到音乐后", p: "tīng dào yīn yuè hòu"}, {w: "赞叹", p: "zàn tàn"}, "“", {w: "峨峨兮若泰山", p: "é é xī ruò tài shān"}, "”，", {w: "这说明", p: "zhè shuō míng"}, "？"],
        en: "Zhong Ziqi praised '峨峨兮若泰山'. What does this show?",
        options: [
            { textStructure: [{w: "说明", p: "zhè shuō míng"}, {w: "他们两人的", p: "tā men liǎng rén de"}, {w: "家", p: "jiā"}, {w: "住在泰山附近", p: "zhù zài tài shān fù jìn"}], en: "It shows that they both lived near Mount Tai.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这是", p: "zhè shì"}, {w: "比喻", p: "bǐ yù"}, "，", {w: "跟住址", p: "gēn zhù zhǐ"}, {w: "完全无关", p: "wán quán wú guān"}, "。"], explanationEn: "Incorrect. Mount Tai is used as a metaphor for the music, it has nothing to do with where they lived." },
            { textStructure: [{w: "说明", p: "zhè shuō míng"}, {w: "子期", p: "zǐ qī"}, {w: "能通过", p: "néng tōng guò"}, {w: "琴声", p: "qín shēng"}, {w: "听出伯牙", p: "tīng chū bó yá"}, {w: "心中的高山意境", p: "xīn zhōng de gāo shān yì jìng"}], en: "It shows Ziqi could sense the mountain image from the music.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "说明琴声", p: "shuō míng qín shēng"}, {w: "成功传达了", p: "chéng gōng chuán dá le"}, {w: "宏大的志向", p: "hóng dà de zhì xiàng"}, "。"], explanationEn: "Correct. It proves Ziqi could feel the grand mountain scenery that Boya wanted to express through his chords." },
            { textStructure: [{w: "说明", p: "zhè shuō míng"}, {w: "伯牙的", p: "bó yá de"}, {w: "古琴上", p: "gǔ qín shàng"}, {w: "雕刻着", p: "diāo kè zhe"}, {w: "泰山的图案", p: "tài shān de tú àn"}], en: "It shows that Boya's zither had drawings of Mount Tai.", correct: false, explanationStructure: [{w: "想太多了", p: "xiǎng tài duō le"}, "，", {w: "文中", p: "wén zhōng"}, {w: "毫无记载", p: "háo wú jì zǎi"}, "。"], explanationEn: "Incorrect. There is no mention of decorations or carvings on the instrument." },
            { textStructure: [{w: "说明", p: "zhè shuō míng"}, {w: "子期", p: "zǐ qī"}, {w: "觉得", p: "jué de"}, {w: "琴声", p: "qín shēng"}, {w: "太吵", p: "tài chǎo"}, "，", {w: "像石头砸落", p: "xiàng shí tou zá luò"}], en: "It shows Ziqi found the music too loud and annoying.", correct: false, explanationStructure: [{w: "离题", p: "lí tí"}, "，", {w: "这是", p: "zhè shì"}, {w: "高度的", p: "gāo dù de"}, {w: "艺术欣赏", p: "yì shù xīn shǎng"}, "。"], explanationEn: "Incorrect. The phrase is a profound compliment, not a complaint about noisy music." }
        ]
    },
    {
        id: 4,
        textStructure: [{w: "句子", p: "jù zi"}, "“", {w: "乃破琴绝弦，终身不复鼓", p: "nǎi pò qín jué xián zhōng shēn bú fù gǔ"}, "”", {w: "中的", p: "zhōng de"}, "“", {w: "复", p: "fù"}, "”", {w: "字怎么解释", p: "zì zě me jiě shì"}, "？"],
        en: "How do you explain the word 'fù' in this sentence?",
        options: [
            { textStructure: [{w: "复习", p: "fù xí"}, "、", {w: "温习功课", p: "wēn xí gōng kè"}], en: "To revise or study school lessons.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这是", p: "zhè shì"}, {w: "现代学习", p: "xiàn dài xué xí"}, {w: "用法", p: "yòng fǎ"}, "。"], explanationEn: "Incorrect. This is the modern classroom meaning of revision, which is wrong here." },
            { textStructure: [{w: "再", p: "zài"}, "、", {w: "重新", p: "chóng xīn"}, "、", {w: "又", p: "yòu"}], en: "Again, once more, or to repeat an action.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "不复鼓", p: "bú fù gǔ"}, "”", {w: "意思就是", p: "yì si jiù shì"}, {w: "再也不弹琴了", p: "zài yě bù tán qín le"}, "。"], explanationEn: "Correct. In classical Chinese, 'fù' acts as an adverb meaning 'again'—meaning he never played zither again." },
            { textStructure: [{w: "复仇", p: "fù chóu"}, "、", {w: "报复", p: "bào fù"}], en: "To take revenge.", correct: false, explanationStructure: [{w: "词义", p: "cí yì"}, {w: "完全想歪", p: "wán quán xiǎng wāi"}, "。"], explanationEn: "Incorrect. This has nothing to do with revenge or anger." },
            { textStructure: [{w: "繁复", p: "fán fù"}, "、", {w: "复杂的", p: "fù zá de"}], en: "Complex or complicated.", correct: false, explanationStructure: [{w: "词性", p: "cí xìng"}, {w: "不对", p: "bú duì"}, "。"], explanationEn: "Incorrect. This turns the word into an adjective, which breaks the grammar." }
        ]
    },
    {
        id: 5,
        textStructure: [{w: "成语", p: "chéng yǔ"}, "“", {w: "知音", p: "zhī yīn"}, "”", {w: "在现代生活", p: "zài xiàn dài shēng huó"}, "中，", {w: "主要", p: "zhǔ yào"}, {w: "用来比喻", p: "yòng lái bǐ yù"}, "？"],
        en: "What does the idiom 'Zhiyin' describe in modern daily life?",
        options: [
            { textStructure: [{w: "听力", p: "tīng lì"}, {w: "特别好的", p: "tè bié hǎo de"}, {w: "耳科医生", p: "ěr kē yī shēng"}], en: "A doctor who has excellent hearing skills.", correct: false, explanationStructure: [{w: "胡说", p: "hú shuō"}, "，", {w: "完全不是", p: "wán quán bú shì"}, {w: "医学词汇", p: "yī xué cí huì"}, "。"], explanationEn: "Incorrect. This is a medical term for hearing or ear health." },
            { textStructure: [{w: "真正", p: "zhēn zhèng"}, {w: "懂自己", p: "dǒng zì jǐ"}, {w: "思想和心意的", p: "sī xiǎng hé xīn yì de"}, {w: "好朋友", p: "hǎo péng you"}], en: "A soulmate or a best friend who truly understands you.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "比喻能", p: "bǐ yù néng"}, {w: "精神共鸣", p: "jīng shén gòng míng"}, {w: "的知心朋友", p: "de zhī xīn péng you"}, "。"], explanationEn: "Correct. Today, 'Zhiyin' represents a true, rare friend who understands your inner feelings and thoughts perfectly." },
            { textStructure: [{w: "会唱歌", p: "huì chàng gē"}, {w: "或者", p: "huò zhě"}, {w: "懂音符的", p: "dǒng yīn fú de"}, {w: "歌星", p: "gē xīng"}], en: "A pop star who knows music notes well.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "它已经", p: "tā yǐ jīng"}, {w: "超越了", p: "chāo yuè le"}, {w: "音乐本身", p: "yīn yuè běn shēn"}, "。"], explanationEn: "Incorrect. The word has evolved past music notes; it now means a special bond of friendship." },
            { textStructure: [{w: "专门", p: "zhuān mén"}, {w: "在网上", p: "zài wǎng shàng"}, {w: "搜集", p: "sōu jí"}, {w: "小道消息的", p: "xiǎo dào xiāo xi de"}, {w: "人", p: "rén"}], en: "A spy who steals news online.", correct: false, explanationStructure: [{w: "离题", p: "lí tí"}, "。"], explanationEn: "Incorrect. This option has no logical link to the virtuous theme of the story." }
        ]
    }
];
