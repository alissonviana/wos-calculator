// Day-based actions structure
// Note: Action labels are kept in Portuguese as they are game-specific item names
const dayActions = {
    1: {
        name: "Day 1",
        alliancePoints: 1,
        actions: [
            { label: 'Escoltar caminhão', points: 10000, resource: 'trucks-escort' },
            { label: 'Atacar caminhão', points: 10000, resource: 'trucks-attack' },
            { label: 'Cristal de Fogo Refinado', points: 18750, resource: 'refined-fire-crystal' },
            { label: 'Cristal de Fogo', points: 1250, resource: 'fire-crystal' },
            { label: 'Fragmento de Cristal', points: 625, resource: 'crystal-fragment' },
            { label: 'Acelerador (construção)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (pesquisa)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (treinamento)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (habilidades)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Carne (2.000)', points: 2, resource: 'meat', divisor: 2000 },
            { label: 'Madeira (2.000)', points: 2, resource: 'wood', divisor: 2000 },
            { label: 'Carvão (400)', points: 2, resource: 'charcoal', divisor: 400 },
            { label: 'Ferro (100)', points: 2, resource: 'iron', divisor: 100 },
            { label: 'Gema', points: 1, resource: 'gem' },
            { label: 'Sigilo de Especialista', points: 3600, resource: 'expert-sigil' },
            { label: 'Livro do Conhecimento', points: 36, resource: 'knowledge-book' }
        ]
    },
    2: {
        name: "Day 2",
        alliancePoints: 2,
        actions: [
            { label: 'Escoltar caminhão', points: 10000, resource: 'trucks-escort' },
            { label: 'Atacar caminhão', points: 10000, resource: 'trucks-attack' },
            { label: 'Fragmento de Herói Raro', points: 210, resource: 'rare-hero-fragment' },
            { label: 'Fragmento de Herói Épico', points: 750, resource: 'epic-hero-fragment' },
            { label: 'Fragmento de Mítico Raro', points: 1875, resource: 'rare-mythic-fragment' },
            { label: 'Cristal de Fogo Refinado', points: 18750, resource: 'refined-fire-crystal' },
            { label: 'Cristal de Fogo', points: 1250, resource: 'fire-crystal' },
            { label: 'Fragmento de Cristal', points: 625, resource: 'crystal-fragment' },
            { label: 'Acelerador (construção)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (pesquisa)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (treinamento)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (habilidades)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Gema', points: 1, resource: 'gem' },
            { label: 'Sigilo de Especialista', points: 3600, resource: 'expert-sigil' },
            { label: 'Livro do Conhecimento', points: 36, resource: 'knowledge-book' }
        ]
    },
    3: {
        name: "Day 3",
        alliancePoints: 2,
        actions: [
            { label: 'Escoltar caminhão', points: 10000, resource: 'trucks-escort' },
            { label: 'Atacar caminhão', points: 10000, resource: 'trucks-attack' },
            { label: 'Amuleto do Chefe', points: 45, resource: 'chief-amulet' },
            { label: 'Avanço do Animal', points: 30, resource: 'animal-advance' },
            { label: 'Marca Selvagens Avançada', points: 9370, resource: 'advanced-wild-mark' },
            { label: 'Marca Selvagens Comum', points: 680, resource: 'common-wild-mark' },
            { label: 'Carne (2.000)', points: 2, resource: 'meat', divisor: 2000 },
            { label: 'Madeira (2.000)', points: 2, resource: 'wood', divisor: 2000 },
            { label: 'Carvão (400)', points: 2, resource: 'charcoal', divisor: 400 },
            { label: 'Ferro (100)', points: 2, resource: 'iron', divisor: 100 },
            { label: 'Gema', points: 1, resource: 'gem' }
        ]
    },
    4: {
        name: "Day 4",
        alliancePoints: 2,
        actions: [
            { label: 'Escoltar caminhão', points: 10000, resource: 'trucks-escort' },
            { label: 'Atacar caminhão', points: 10000, resource: 'trucks-attack' },
            { label: 'Amuleto do Chefe', points: 45, resource: 'chief-amulet' },
            { label: 'Essência de Equipamento de Herói', points: 1875, resource: 'hero-equipment-essence' },
            { label: 'Ferramenta de Equipamento de Herói', points: 3750, resource: 'hero-equipment-tool' },
            { label: 'Mithril', points: 67500, resource: 'mithril' },
            { label: 'Treinar Soldado Nv. 1', points: 1, resource: 'troop-nv1' },
            { label: 'Treinar Soldado Nv. 2', points: 1, resource: 'troop-nv2' },
            { label: 'Treinar Soldado Nv. 3', points: 2, resource: 'troop-nv3' },
            { label: 'Treinar Soldado Nv. 4', points: 3, resource: 'troop-nv4' },
            { label: 'Treinar Soldado Nv. 5', points: 4, resource: 'troop-nv5' },
            { label: 'Treinar Soldado Nv. 6', points: 7, resource: 'troop-nv6' },
            { label: 'Treinar Soldado Nv. 7', points: 10, resource: 'troop-nv7' },
            { label: 'Treinar Soldado Nv. 8', points: 14, resource: 'troop-nv8' },
            { label: 'Treinar Soldado Nv. 9', points: 18, resource: 'troop-nv9' },
            { label: 'Treinar Soldado Nv. 10', points: 24, resource: 'troop-nv10' },
            { label: 'Treinar Soldado Nv. 11', points: 30, resource: 'troop-nv11' },
            { label: 'Gema', points: 1, resource: 'gem' }
        ]
    },
    5: {
        name: "Day 5",
        alliancePoints: 2,
        actions: [
            { label: 'Escoltar caminhão', points: 10000, resource: 'trucks-escort' },
            { label: 'Atacar caminhão', points: 10000, resource: 'trucks-attack' },
            { label: 'Cristal de Fogo Refinado', points: 18750, resource: 'refined-fire-crystal' },
            { label: 'Cristal de Fogo', points: 1250, resource: 'fire-crystal' },
            { label: 'Fragmento de Cristal', points: 625, resource: 'crystal-fragment' },
            { label: 'Acelerador (construção)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (pesquisa)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (treinamento)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (habilidades)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Gema', points: 1, resource: 'gem' }
        ]
    },
    6: {
        name: "Day 6",
        alliancePoints: 4,
        actions: [
            { label: 'Escoltar caminhão', points: 10000, resource: 'trucks-escort' },
            { label: 'Atacar caminhão', points: 10000, resource: 'trucks-attack' },
            { label: 'Amuleto do Chefe', points: 45, resource: 'chief-amulet' },
            { label: 'Essência de Equipamento de Herói', points: 1875, resource: 'hero-equipment-essence' },
            { label: 'Ferramenta de Equipamento de Herói', points: 3750, resource: 'hero-equipment-tool' },
            { label: 'Mithril', points: 67500, resource: 'mithril' },
            { label: 'Fragmento de Herói Raro', points: 210, resource: 'rare-hero-fragment' },
            { label: 'Fragmento de Herói Épico', points: 750, resource: 'epic-hero-fragment' },
            { label: 'Fragmento de Mítico Raro', points: 1875, resource: 'rare-mythic-fragment' },
            { label: 'Avanço do Animal', points: 30, resource: 'animal-advance' },
            { label: 'Marca Selvagens Avançada', points: 9370, resource: 'advanced-wild-mark' },
            { label: 'Marca Selvagens Comum', points: 680, resource: 'common-wild-mark' },
            { label: 'Cristal de Fogo Refinado', points: 18750, resource: 'refined-fire-crystal' },
            { label: 'Cristal de Fogo', points: 1250, resource: 'fire-crystal' },
            { label: 'Fragmento de Cristal', points: 625, resource: 'crystal-fragment' },
            { label: 'Acelerador (construção)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (pesquisa)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (treinamento)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Acelerador (habilidades)', points: 18, resource: 'accelerator', divisor: 1 },
            { label: 'Gema', points: 1, resource: 'gem' }
        ]
    }
};

// Centralized resource metadata
const resources = {
    'refined-fire-crystal': { label: 'Cristal de Fogo Refinado', emoji: '🔥', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/05/21122055/item_icon_100082.png' },
    'fire-crystal': { label: 'Cristal de Fogo', emoji: '🔥', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/07/item_icon_100081.png' },
    'crystal-fragment': { label: 'Fragmento de Cristal', emoji: '✨', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/07/item_icon_100083.png' },
    'rare-hero-fragment': { label: 'Fragmento Herói Raro', emoji: '⭐', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/item_icon_500222.png' },
    'epic-hero-fragment': { label: 'Fragmento Herói Épico', emoji: '✨', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/item_icon_500221.png' },
    'rare-mythic-fragment': { label: 'Fragmento Mítico Raro', emoji: '💎', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/item_icon_500220.png' },
    'chief-amulet': { label: 'Amuleto do Chefe', emoji: '🎁' },
    'advanced-wild-mark': { label: 'Marca Selvagens Avançada', emoji: '🔥', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/11/item_icon_600047.png' },
    'common-wild-mark': { label: 'Marca Selvagens Comum', emoji: '❄️', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/11/item_icon_600046.png' },
    'animal-advance': { label: 'Avanço do Animal', emoji: '🐺' },
    'hero-equipment-essence': { label: 'Pedra Essência', emoji: '💠', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/06/14084129/item_icon_500240.png' },
    'hero-equipment-tool': { label: 'Ferramenta', emoji: '🔧' },
    'mithril': { label: 'Mithril', emoji: '⚒️', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/03/item_icon_500235.png' },
    'accelerator': { label: 'Acelerador', emoji: '⏱️' },
    'expert-sigil': { label: 'Sigilo de Especialista', emoji: '🔮', icon: 'https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/08/item_icon_570000.png' },
    'knowledge-book': { label: 'Livro do Conhecimento', emoji: '📖' },
    'gem': { label: 'Gema', emoji: '💎' },
    'meat': { label: 'Carne', emoji: '🥩' },
    'wood': { label: 'Madeira', emoji: '🪵' },
    'charcoal': { label: 'Carvão', emoji: '♠️' },
    'iron': { label: 'Ferro', emoji: '⚒️' },
    'equipment-score': { label: 'Pontuação do Equipamento', emoji: '📈' },
    'trucks-escort': { label: 'Escoltar Caminhão', emoji: '🚚' },
    'trucks-attack': { label: 'Atacar Caminhão', emoji: '⚔️' }
};

const TRUCK_POINTS_PER_DAY = 80000;

const troopPointsPerLevel = {
    1: 1, 2: 1, 3: 2, 4: 3, 5: 4, 6: 7, 7: 10, 8: 14, 9: 18, 10: 24, 11: 30
};

function updateTroopPoints() {
    optimizeResources();
}

function getIconHtml(resourceId, size = 'small') {
    const resource = resources[resourceId];
    if (!resource) return '📦';

    if (resource.icon) {
        const sizeClass = size === 'small' ? 'resource-icon' : 'distribution-icon';
        return `<img src="${resource.icon}" alt="${resource.label}" class="${sizeClass}" />`;
    } else {
        return resource.emoji;
    }
}

function getOnlyIcon(resourceId) {
    const resource = resources[resourceId];
    if (!resource || !resource.icon) return resource?.emoji || '📦';
    return `<img src="${resource.icon}" alt="${resource.label}" class="distribution-icon" />`;
}

function getValue(id) {
    const element = document.getElementById(id);
    return element ? Math.max(0, parseInt(element.value) || 0) : 0;
}

function optimizeResources() {
    const distribution = {
        1: { trucks: '4 Escolta + 4 Ataque' },
        2: { trucks: '4 Escolta + 4 Ataque' },
        3: { trucks: '4 Escolta + 4 Ataque' },
        4: { trucks: '4 Escolta + 4 Ataque' },
        5: { trucks: '4 Escolta + 4 Ataque' },
        6: { trucks: '4 Escolta + 4 Ataque' }
    };

    const pointsPerDay = {
        1: TRUCK_POINTS_PER_DAY,
        2: TRUCK_POINTS_PER_DAY,
        3: TRUCK_POINTS_PER_DAY,
        4: TRUCK_POINTS_PER_DAY,
        5: TRUCK_POINTS_PER_DAY,
        6: TRUCK_POINTS_PER_DAY
    };

    // Add troop training points (Day 4 only)
    const troopLevel = parseInt(document.getElementById('troop-level').value);
    const troopQuantity = parseInt(document.getElementById('troop-quantity').value) || 0;
    if (troopQuantity > 0) {
        const troopPointsPerUnit = troopPointsPerLevel[troopLevel];
        pointsPerDay[4] += troopQuantity * troopPointsPerUnit;
    }

    // Collect all unique resources with their quantities and available days
    const processedResources = new Set();
    const resourcesInfo = {};

    for (let day = 1; day <= 6; day++) {
        for (const action of dayActions[day].actions) {
            const resourceId = action.resource;

            if (resourceId === 'trucks-escort' || resourceId === 'trucks-attack') continue;
            if (processedResources.has(resourceId)) continue;

            const quantity = getValue(`total-${resourceId}`);
            if (quantity === 0) continue;

            // Find all days where this resource is available
            const availableDays = [];
            const actionsByDay = {};

            for (let d = 1; d <= 6; d++) {
                for (const a of dayActions[d].actions) {
                    if (a.resource === resourceId) {
                        availableDays.push(d);
                        actionsByDay[d] = a;
                        break;
                    }
                }
            }

            resourcesInfo[resourceId] = {
                quantity,
                days: availableDays,
                actions: actionsByDay
            };
            processedResources.add(resourceId);
        }
    }

    // Alliance points per day
    const alliancePointsPerDay = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2, 6: 4 };

    // Distribute each resource optimally, balancing by alliance point value
    for (const [resourceId, info] of Object.entries(resourcesInfo)) {
        const { quantity, days, actions } = info;

        // If resource is only available on one day, use all there
        if (days.length === 1) {
            const day = days[0];
            distribution[day][resourceId] = quantity;
            const pointsPerUnit = actions[day].points;
            pointsPerDay[day] += quantity * pointsPerUnit;
        } else {
            // Multi-day resource: distribute by alliance point value efficiency
            // Calculate efficiency: alliancePoints / (currentPoints + 1 to avoid division by 0)
            const dayEfficiency = days.map(day => ({
                day,
                efficiency: alliancePointsPerDay[day] / (pointsPerDay[day] + 1),
                alliancePoints: alliancePointsPerDay[day]
            }));

            // Sort by efficiency (highest first) - prioritize high alliance value days
            dayEfficiency.sort((a, b) => b.efficiency - a.efficiency);

            // Distribute quantity to days in efficiency order
            let remainingQuantity = quantity;
            const allocatedPerDay = {};

            // First pass: distribute equally
            const quantityPerDay = Math.floor(quantity / days.length);

            for (const dayInfo of dayEfficiency) {
                if (remainingQuantity > 0) {
                    const allocate = Math.min(quantityPerDay, remainingQuantity);
                    allocatedPerDay[dayInfo.day] = allocate;
                    remainingQuantity -= allocate;
                }
            }

            // Second pass: distribute remainder to highest efficiency days
            for (const dayInfo of dayEfficiency) {
                if (remainingQuantity > 0) {
                    allocatedPerDay[dayInfo.day] = (allocatedPerDay[dayInfo.day] || 0) + 1;
                    remainingQuantity -= 1;
                }
            }

            // Apply allocation and update points
            for (const day of days) {
                const allocate = allocatedPerDay[day] || 0;
                if (allocate > 0) {
                    distribution[day][resourceId] = allocate;
                    const pointsPerUnit = actions[day].points;
                    pointsPerDay[day] += allocate * pointsPerUnit;
                }
            }
        }
    }

    displayDistribution(distribution);

    for (let day = 1; day <= 6; day++) {
        const element = document.getElementById(`resultado-dia${day}`);
        if (pointsPerDay[day] === TRUCK_POINTS_PER_DAY) {
            element.innerHTML = '<span class="points-value">' + pointsPerDay[day].toLocaleString('pt-BR') + '</span> pontos (caminhões)';
        } else {
            element.innerHTML = '<span class="points-value">' + pointsPerDay[day].toLocaleString('pt-BR') + '</span> pontos';
        }
    }

    const totalOverall = Object.values(pointsPerDay).reduce((a, b) => a + b, 0);
    document.getElementById('total-pontos-geral').textContent = totalOverall.toLocaleString('pt-BR');
}

function displayDistribution(distribution) {
    const container = document.getElementById('distribution-container');

    let html = '<div class="distribution-grid">';

    for (let day = 1; day <= 6; day++) {
        const resources_obj = distribution[day];
        const hasResources = Object.keys(resources_obj).filter(k => k !== 'trucks').length > 0;

        html += `
            <div class="distribution-card day-${day}">
                <div class="distribution-header">
                    <h4>Dia ${day}</h4>
                </div>
                <div class="distribution-items">
        `;

        if (resources_obj.trucks) {
            html += `<div class="distribution-item trucks">🚚 <strong>${resources_obj.trucks}</strong></div>`;
        }

        if (hasResources) {
            for (const [resourceId, quantity] of Object.entries(resources_obj)) {
                if (resourceId !== 'trucks') {
                    const resource = resources[resourceId];
                    if (!resource) continue;

                    const icon = getOnlyIcon(resourceId);
                    html += `<div class="distribution-item" title="${resource.label}">`;
                    html += `${icon} <strong>${quantity}</strong>`;
                    html += `</div>`;
                }
            }
        }

        html += `
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

function clearAll() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = '0';
    });
    optimizeResources();
}

function initializeIcons() {
    for (const [resourceId, resource] of Object.entries(resources)) {
        const labelId = `total-${resourceId}`;
        const label = document.querySelector(`label[for="${labelId}"]`);
        if (label) {
            const icon = getIconHtml(resourceId, 'small');
            label.textContent = '';
            label.innerHTML = `${icon} ${resource.label}:`;
        }
    }
}

function showDayGuide(day) {
    // Update active tab
    document.querySelectorAll('.day-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.day-tab')[day - 1].classList.add('active');

    // Get day info
    const dayInfo = dayActions[day];
    let html = `<div class="guide-header">📅 ${dayInfo.name} - ${dayInfo.alliancePoints} ponto(s) para aliança</div>`;

    // Separate trucks, troops and resources
    const truckActions = dayInfo.actions.filter(a => a.resource.includes('trucks'));
    const troopActions = dayInfo.actions.filter(a => a.resource.includes('troop'));
    const resourceActions = dayInfo.actions.filter(a => !a.resource.includes('trucks') && !a.resource.includes('troop'));

    // Show trucks
    if (truckActions.length > 0) {
        html += '<div style="margin-bottom: 15px;">';
        for (const action of truckActions) {
            html += `<div class="guide-item">
                        <div class="guide-item-name">🚚 ${action.label}</div>
                        <div class="guide-item-points">${action.points.toLocaleString('pt-BR')} pts</div>
                    </div>`;
        }
        html += '</div>';
    }

    // Show troop training
    if (troopActions.length > 0) {
        html += '<div style="margin-bottom: 15px;">';
        html += '<div class="guide-header" style="font-size: 0.95em; margin: 10px 0;">🪖 Treino de Tropas</div>';
        for (const action of troopActions) {
            html += `<div class="guide-item">
                        <div class="guide-item-name">${action.label}</div>
                        <div class="guide-item-points">${action.points} pts</div>
                    </div>`;
        }
        html += '</div>';
    }

    // Show resources
    for (const action of resourceActions) {
        const resource = resources[action.resource];
        const icon = getOnlyIcon(action.resource);
        html += `<div class="guide-item">
                    <div class="guide-item-name">${icon} ${action.label}</div>
                    <div class="guide-item-points">${action.points.toLocaleString('pt-BR')} pts</div>
                </div>`;
    }

    document.getElementById('guide-content').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    initializeIcons();
    optimizeResources();
    showDayGuide(1);  // Show Day 1 guide by default
});
