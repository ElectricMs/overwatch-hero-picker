// 守望先锋英雄数据（最新2026年3月版本，共50位英雄）
const heroes = {
    tank: [
        { name: '安燃', english: 'Anran', emoji: '🔥', desc: '新英雄，火焰力量与战斗技巧的结合' },
        { name: '莱因哈特', english: 'Reinhardt', emoji: '🛡️', desc: '身披重甲的十字军，用巨大的火箭锤和屏障守护队友' },
        { name: '温斯顿', english: 'Winston', emoji: '🐒', desc: '天才科学家兼大猩猩，利用跳板和特斯拉炮战斗' },
        { name: 'D.Va', english: 'D.Va', emoji: '🎮', desc: '职业玩家驾驶机甲，用防御矩阵和微型飞弹攻击' },
        { name: '查莉娅', english: 'Zarya', emoji: '⚡', desc: '前运动员，用粒子炮和能量护盾战斗' },
        { name: '路霸', english: 'Roadhog', emoji: '🐷', desc: '体型庞大的废土居民，用链钩和呼吸治疗' },
        { name: '奥丽莎', english: 'Orisa', emoji: '🤖', desc: '先进的机器人守护者，用屏障和聚变炮保护队友' },
        { name: '西格玛', english: 'Sigma', emoji: '🌌', desc: '天体物理学家，操控重力和超新星球体' },
        { name: '破坏球', english: 'Wrecking Ball', emoji: '🔨', desc: '哈蒙德驾驶的机甲，可以在战斗中快速滚动' },
        { name: '拉玛刹', english: 'Ramattra', emoji: '🤖', desc: '无家可归的僧侣领袖，操控纳米机器人战斗' },
        { name: '毛加', english: 'Mauga', emoji: '🎯', desc: '萨摩亚战士，装备双管机枪和暴怒模式' },
        { name: '堡垒', english: 'Bastion', emoji: '🤖', desc: '侦察机器人，可以切换形态进行强力攻击' },
        { name: '末日铁拳', english: 'Doomfist', emoji: '👊', desc: '手套可以发射冲击波，擅长近战和空中攻击' },
        { name: '骇灾', english: 'Hazard', emoji: '☣️', desc: '新英雄，危险的化学武器专家' },
        { name: '渣客女王', english: 'Junker Queen', emoji: '👑', desc: '废土女王，使用霰弹枪和匕首战斗' },
        { name: '探奇', english: 'Venture', emoji: '⛏️', desc: '新英雄，探险家，擅长挖掘和探索' }
    ],
    damage: [
        { name: '源氏', english: 'Genji', emoji: '⚔️', desc: '赛博忍者，用忍者镖和龙刃斩击敌人' },
        { name: '卡西迪', english: 'Cassidy', emoji: '🤠', desc: '前赏金猎人，使用左轮手枪和战术翻滚' },
        { name: '法老之鹰', english: 'Pharah', emoji: '🚀', desc: '使用火箭发射器在天空中飞行攻击' },
        { name: '黑百合', english: 'Widowmaker', emoji: '🕷️', desc: '致命狙击手，用狙击步枪抓钩和毒液地雷' },
        { name: '半藏', english: 'Hanzo', emoji: '🏹', desc: '弓箭手，可以发射爬墙箭和巨龙撞击' },
        { name: '猎空', english: 'Tracer', emoji: '⏱️', desc: '时间跳跃特工，使用双枪和闪回能力' },
        { name: '死神', english: 'Reaper', emoji: '💀', desc: '暗影刺客，用散弹枪和幽灵形态战斗' },
        { name: '士兵：76', english: 'Soldier: 76', emoji: '🎖️', desc: '老兵士兵，使用重型脉冲步枪和治疗力场' },
        { name: '艾什', english: 'Ashe', emoji: '🔫', desc: '犯罪组织首领，使用霰弹枪和召唤BOB' },
        { name: '回声', english: 'Echo', emoji: '🦋', desc: '适应性战斗机器人，可以复制敌人技能' },
        { name: '索杰恩', english: 'Sojourn', emoji: '❄️', desc: '前守望先锋指挥官，使用能量步枪和过载' },
        { name: '托比昂', english: 'Torbjörn', emoji: '🔩', desc: '矮人工程师，可以建造炮台和护甲' },
        { name: '秩序之光', english: 'Symmetra', emoji: '🔮', desc: '光子建筑师，用传送门和哨卫炮战斗' },
        { name: '狂鼠', english: 'Junkrat', emoji: '💣', desc: '疯狂的爆破专家，使用捕兽夹和轮胎炸弹' },
        { name: '美', english: 'Mei', emoji: '❄️', desc: '气候学家，用冰冻枪和冰墙控制战场' },
        { name: '埃姆雷', english: 'Emre', emoji: '⚡', desc: '新英雄，能量操控专家' },
        { name: '弗蕾娅', english: 'Freja', emoji: '🧊', desc: '新英雄，冰霜战士' },
        { name: '金驭', english: 'Domina', emoji: '🎭', desc: '新英雄，精神控制大师' },
        { name: '黑影', english: 'Sombra', emoji: '💻', desc: '黑客特工，可以黑掉敌人的装备' },
        { name: '飞天猫', english: 'Jetpack Cat', emoji: '🐱', desc: '新英雄，装备喷气背包的猫' },
        { name: '朱诺', english: 'Juno', emoji: '🌙', desc: '新英雄，月亮女神' },
        { name: '斩仇', english: 'Vendetta', emoji: '🗡️', desc: '新英雄，复仇的刺客' },
        { name: '瑞稀', english: 'Mizuki', emoji: '🌸', desc: '新英雄，樱花武士' }
    ],
    support: [
        { name: '天使', english: 'Mercy', emoji: '👼', desc: '战地医生，用天使之杖治疗和复活队友' },
        { name: '安娜', english: 'Ana', emoji: '🎯', desc: '守望先锋创始人，狙击手兼治疗师' },
        { name: '莫伊拉', english: 'Moira', emoji: '💜', desc: '基因科学家，用生命之息和生化之球战斗' },
        { name: '布丽吉塔', english: 'Brigitte', emoji: '🛡️', desc: '战士兼工程师，提供护甲和治疗' },
        { name: '卢西奥', english: 'Lúcio', emoji: '🎵', desc: 'DJ，用音乐治疗和加速队友' },
        { name: '禅雅塔', english: 'Zenyatta', emoji: '🧘', desc: '机器人僧侣，用和谐和不谐之球' },
        { name: '巴蒂斯特', english: 'Baptiste', emoji: '💉', desc: '前战地军医，使用治疗仪和维生力场' },
        { name: '伊拉锐', english: 'Illari', emoji: '☀️', desc: '秘鲁太阳战士，使用太阳能武器' },
        { name: '雾子', english: 'Kiriko', emoji: '🦊', desc: '忍者治疗师，用符咒和铃铛' },
        { name: '生命之梭', english: 'Lifeweaver', emoji: '🌸', desc: '泰坦科学家，用生命莲花治疗' },
        { name: '无漾', english: 'Wuyang', emoji: '🐍', desc: '新英雄，神秘的东方治疗师' }
    ]
};

// 角色类型映射
const roleMap = {
    tank: '重装',
    damage: '输出',
    support: '支援'
};

// 从 localStorage 加载收集的英雄
let collectedHeroes = JSON.parse(localStorage.getItem('collectedHeroes') || '[]');

// 更新收集进度
function updateProgress() {
    const totalHeroes = heroes.tank.length + heroes.damage.length + heroes.support.length;
    const uniqueCollected = new Set(collectedHeroes).size;

    document.getElementById('unlockedCount').textContent = uniqueCollected;
    document.getElementById('totalCount').textContent = totalHeroes;
    document.getElementById('progressFill').style.width = `${(uniqueCollected / totalHeroes) * 100}%`;

    updateCollectionGrid();
}

// 更新收集图鉴显示
function updateCollectionGrid() {
    const grid = document.getElementById('collectionGrid');
    const collectedSet = new Set(collectedHeroes);

    // 按角色类型分组显示所有英雄
    let html = '';

    ['tank', 'damage', 'support'].forEach(role => {
        const roleHeroes = heroes[role];
        const collectedInRole = roleHeroes.filter((hero, index) => {
            return collectedSet.has(`${role}-${index}`);
        }).length;

        html += `<div class="role-section">
            <div class="role-title">${roleMap[role]} (${collectedInRole}/${roleHeroes.length})</div>
            <div class="role-grid">`;

        roleHeroes.forEach((hero, index) => {
            const heroKey = `${role}-${index}`;
            const isCollected = collectedSet.has(heroKey);

            html += `
                <div class="hero-item ${isCollected ? 'collected' : 'uncollected'}"
                     onclick="showHeroDetail('${role}', ${index})"
                     data-role="${role}"
                     data-index="${index}">
                    <div class="hero-emoji">${isCollected ? hero.emoji : '❓'}</div>
                    <div class="hero-name">${hero.name}</div>
                    <div class="hero-status">${isCollected ? '✅' : '🔒'}</div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    grid.innerHTML = html;
}

// 显示英雄详情
function showHeroDetail(role, index) {
    const hero = heroes[role][index];
    const heroKey = `${role}-${index}`;
    const collectedSet = new Set(collectedHeroes);
    const isCollected = collectedSet.has(heroKey);

    const modal = document.createElement('div');
    modal.className = 'hero-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.hero-modal').remove()">✕</button>
            <div class="modal-header">
                <div class="modal-emoji">${isCollected ? hero.emoji : '❓'}</div>
                <h2 class="modal-name">${hero.name}</h2>
                <div class="modal-english">${hero.english}</div>
            </div>
            <div class="modal-body">
                <div class="modal-role type-${role}">${roleMap[role]}</div>
                <p class="modal-desc">${isCollected ? hero.desc : '解锁后查看详情'}</p>
                <div class="modal-status">
                    ${isCollected ? '<span class="status-unlocked">✅ 已收集</span>' : '<span class="status-locked">🔒 未解锁</span>'}
                </div>
            </div>
        </div>
    `;

    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

// 随机抽取英雄
function drawHero() {
    const roles = ['tank', 'damage', 'support'];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    const heroList = heroes[randomRole];
    const randomHero = heroList[Math.floor(Math.random() * heroList.length)];
    const heroIndex = heroList.indexOf(randomHero);
    const heroKey = `${randomRole}-${heroIndex}`;

    // 添加到收集列表
    collectedHeroes.push(heroKey);
    localStorage.setItem('collectedHeroes', JSON.stringify(collectedHeroes));

    // 更新显示
    displayHero(randomHero, randomRole);
    updateProgress();
}

// 显示英雄
function displayHero(hero, role) {
    const display = document.getElementById('heroDisplay');
    const typeClass = `type-${role}`;

    display.innerHTML = `
        <div class="hero-name">${hero.emoji} ${hero.name}</div>
        <div class="hero-type ${typeClass}">
            ${roleMap[role]} - ${hero.english}
        </div>
        <div class="hero-description">
            恭喜你抽取到了本命英雄！
        </div>
    `;
}

// 按钮交互
const drawButton = document.getElementById('drawButton');
let isDrawing = false;
let drawTimer = null;

// 长按开始
function startDraw() {
    if (isDrawing) return;

    isDrawing = true;
    drawButton.classList.add('disabled');
    drawButton.querySelector('.button-text').textContent = '抽取中...';

    const display = document.getElementById('heroDisplay');
    display.classList.add('drawing');

    // 3秒后完成抽取
    setTimeout(() => {
        drawHero();
        display.classList.remove('drawing');

        // 重置按钮
        setTimeout(() => {
            isDrawing = false;
            drawButton.classList.remove('disabled');
            drawButton.querySelector('.button-text').textContent = '长按抽取英雄';
        }, 1000);
    }, 2000);
}

// 鼠标/触摸事件
drawButton.addEventListener('mousedown', startDraw);
drawButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDraw();
});

// 防止默认触摸行为
drawButton.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });

// 重置收藏记录
function resetCollection() {
    if (confirm('确定要清空所有收藏记录吗？此操作不可撤销！')) {
        collectedHeroes = [];
        localStorage.removeItem('collectedHeroes');
        updateProgress();
        alert('已重置收藏记录！');
    }
}

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});

console.log('守望先锋英雄抽取器已加载！');
console.log(`总共 ${heroes.tank.length + heroes.damage.length + heroes.support.length} 位英雄等你收集！`);
