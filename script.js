// 守望先锋英雄数据
const heroes = {
    tank: [
        { name: '莱因哈特', english: 'Reinhardt', emoji: '🛡️' },
        { name: '温斯顿', english: 'Winston', emoji: '🐒' },
        { name: 'D.Va', english: 'D.Va', emoji: '🎮' },
        { name: '查莉娅', english: 'Zarya', emoji: '⚡' },
        { name: '路霸', english: 'Roadhog', emoji: '🐷' },
        { name: '奥丽莎', english: 'Orisa', emoji: '🤖' },
        { name: '西格玛', english: 'Sigma', emoji: '🌌' },
        { name: '破坏球', english: 'Wrecking Ball', emoji: '🔨' },
        { name: '拉玛塔', english: 'Ramattra', emoji: '🤖' },
        { name: '毛加', english: 'Mauga', emoji: '🎯' }
    ],
    damage: [
        { name: '源氏', english: 'Genji', emoji: '⚔️' },
        { name: '麦克雷', english: 'Cassidy', emoji: '🤠' },
        { name: '法老之鹰', english: 'Pharah', emoji: '🚀' },
        { name: '黑百合', english: 'Widowmaker', emoji: '🕷️' },
        { name: '半藏', english: 'Hanzo', emoji: '🏹' },
        { name: '猎空', english: 'Tracer', emoji: '⏱️' },
        { name: '死神', english: 'Reaper', emoji: '💀' },
        { name: '士兵76', english: 'Soldier: 76', emoji: '🎖️' },
        { name: '铁拳', english: 'Doomfist', emoji: '👊' },
        { name: '艾什', english: 'Ashe', emoji: '🔫' },
        { name: '回声', english: 'Echo', emoji: '🦋' },
        { name: '索杰恩', english: 'Sojourn', emoji: '❄️' },
        { name: '伞兵', english: 'Baptiste', emoji: '💉' },
        { name: '托比昂', english: 'Torbjörn', emoji: '🔩' },
        { name: '秩序之光', english: 'Symmetra', emoji: '🔮' },
        { name: '狂鼠', english: 'Junkrat', emoji: '💣' }
    ],
    support: [
        { name: '天使', english: 'Mercy', emoji: '👼' },
        { name: '安娜', english: 'Ana', emoji: '🎯' },
        { name: '莫伊拉', english: 'Moira', emoji: '💜' },
        { name: '布丽吉特', english: 'Brigitte', emoji: '🛡️' },
        { name: '卢西奥', english: 'Lúcio', emoji: '🎵' },
        { name: '禅雅塔', english: 'Zenyatta', emoji: '🧘' },
        { name: '巴蒂斯特', english: 'Baptiste', emoji: '💉' },
        { name: '伊拉芮', english: 'Illari', emoji: '☀️' },
        { name: '基里科', english: 'Kiriko', emoji: '🦊' },
        { name: '生命之梭', english: 'Lifeweaver', emoji: '🌸' }
    ]
};

// 角色类型映射
const roleMap = {
    tank: '坦克',
    damage: '输出',
    support: '辅助'
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
                <div class="hero-item ${isCollected ? 'collected' : 'uncollected'}">
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

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});

console.log('守望先锋英雄抽取器已加载！');
console.log(`总共 ${heroes.tank.length + heroes.damage.length + heroes.support.length} 位英雄等你收集！`);
