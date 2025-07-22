// Family Tree Data
const treeData = [
    { id: 1, name: "Adam", title: "First Man", top: 50, left: 500, content: "Created in God's image, father of humanity", connections: [2] },
    { id: 2, name: "Seth", title: "Son of Adam", top: 150, left: 300, content: "Appointed in place of Abel", connections: [3] },
    { id: 3, name: "Enos", title: "Son of Seth", top: 150, left: 500, content: "Began to call upon the name of the Lord", connections: [4] },
    { id: 4, name: "Cainan", title: "Son of Enos", top: 150, left: 700, content: "Patriarch before the Flood", connections: [5] },
    { id: 5, name: "Mahalaleel", title: "Son of Cainan", top: 250, left: 400, content: "Lived 895 years", connections: [6] },
    { id: 6, name: "Jared", title: "Son of Mahalaleel", top: 250, left: 600, content: "Father of Enoch", connections: [7] },
    { id: 7, name: "Enoch", title: "Prophet", top: 350, left: 300, content: "Walked with God, translated", connections: [8] },
    { id: 8, name: "Methuselah", title: "Oldest Man", top: 350, left: 500, content: "Lived 969 years", connections: [9] },
    { id: 9, name: "Lamech", title: "Father of Noah", top: 350, left: 700, content: "Prophesied of Noah's mission", connections: [10] },
    { id: 10, name: "Noah", title: "Ark Builder", top: 450, left: 500, content: "Preserver of humanity through the Flood", connections: [11] },
    { id: 11, name: "Shem", title: "Son of Noah", top: 550, left: 400, content: "Ancestor of Abraham", connections: [12] },
    { id: 12, name: "Arphaxad", title: "Son of Shem", top: 550, left: 600, content: "Patriarch after Flood", connections: [13] },
    { id: 13, name: "Salah", title: "Son of Arphaxad", top: 650, left: 300, content: "Lived 433 years", connections: [14] },
    { id: 14, name: "Eber", title: "Son of Salah", top: 650, left: 500, content: "Progenitor of Hebrews", connections: [15] },
    { id: 15, name: "Peleg", title: "Son of Eber", top: 650, left: 700, content: "Earth divided in his days", connections: [16] },
    { id: 16, name: "Reu", title: "Son of Peleg", top: 750, left: 400, content: "Lived 239 years", connections: [17] },
    { id: 17, name: "Serug", title: "Son of Reu", top: 750, left: 600, content: "Father of Nahor", connections: [18] },
    { id: 18, name: "Nahor", title: "Son of Serug", top: 850, left: 300, content: "Grandfather of Abraham", connections: [19] },
    { id: 19, name: "Terah", title: "Father of Abraham", top: 850, left: 500, content: "Began journey to Canaan", connections: [20] },
    { id: 20, name: "Abraham", title: "Father of Faith", top: 850, left: 700, content: "Covenant patriarch", connections: [21, 26] },
    { id: 21, name: "Isaac", title: "Son of Promise", top: 950, left: 400, content: "Miraculous birth, offered in sacrifice", connections: [22] },
    { id: 22, name: "Jacob", title: "Israel", top: 950, left: 600, content: "Father of the 12 tribes", connections: [23] },
    { id: 23, name: "Judah", title: "Royal Tribe", top: 1050, left: 500, content: "Progenitor of Davidic line", connections: [24] },
    { id: 24, name: "Perez", title: "Son of Judah", top: 1150, left: 500, content: "Ancestor of David", connections: [25] },
    { id: 25, name: "Boaz", title: "Ruth's Husband", top: 1250, left: 500, content: "Kinsman-redeemer in Ruth's story", connections: [27] },
    { id: 26, name: "Sarah", title: "Mother of Nations", top: 900, left: 750, content: "Wife of Abraham, mother of Isaac", connections: [21] },
    { id: 27, name: "Obed", title: "Father of Jesse", top: 1350, left: 500, content: "Father of Jesse", connections: [28] },
    { id: 28, name: "Jesse", title: "Father of David", top: 1450, left: 500, content: "Father of King David", connections: [29] },
    { id: 29, name: "David", title: "King of Israel", top: 1550, left: 500, content: "Man after God's own heart", connections: [30] },
    { id: 30, name: "Solomon", title: "King of Israel", top: 1650, left: 400, content: "Builder of the Temple", connections: [] },
    { id: 31, name: "Mary", title: "Mother of Jesus", top: 1750, left: 500, content: "Virgin mother of Messiah", connections: [32] },
    { id: 32, name: "Jesus Christ", title: "Son of God", top: 1850, left: 500, content: "The Messiah, Savior of the World", connections: [] }
];

function initFamilyTree() {
    const familyTree = document.getElementById('family-tree');
    const detailPopup = document.querySelector('.node-detail');
    const closeBtn = document.querySelector('.close-detail');
    
    familyTree.innerHTML = '';
    
    treeData.forEach(node => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'tree-node';
        nodeEl.style.top = node.top + 'px';
        nodeEl.style.left = node.left + 'px';
        nodeEl.innerHTML = `
            <h4>${node.name}</h4>
            <p>${node.title}</p>
        `;
        
        nodeEl.addEventListener('click', function() {
            document.getElementById('detail-name').textContent = node.name;
            document.getElementById('detail-title').textContent = node.title;
            document.getElementById('detail-content').innerHTML = `
                <p><strong>Scripture References:</strong> Genesis 1:26-5:5</p>
                <p><strong>Key Role:</strong> ${node.title}</p>
                <p><strong>Significance:</strong> ${node.content}</p>
                <p><strong>Prophetic Utterance:</strong> "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh" (Genesis 2:24)</p>
                <a href="prophet-${node.name.toLowerCase()}.html" class="btn">Read Full Account</a>
            `;
            detailPopup.classList.add('active');
        });
        
        familyTree.appendChild(nodeEl);
        
        node.connections.forEach(connId => {
            const targetNode = treeData.find(n => n.id === connId);
            if (targetNode) {
                const line = document.createElement('div');
                line.className = 'tree-line';
                
                const x1 = node.left + 60;
                const y1 = node.top + 40;
                const x2 = targetNode.left + 60;
                const y2 = targetNode.top + 20;
                
                const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                
                line.style.width = length + 'px';
                line.style.top = y1 + 'px';
                line.style.left = x1 + 'px';
                line.style.transform = `rotate(${angle}deg)`;
                
                familyTree.appendChild(line);
            }
        });
    });
    
    closeBtn.addEventListener('click', function() {
        detailPopup.classList.remove('active');
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === detailPopup) {
            detailPopup.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initFamilyTree();
    
    const navLinks = document.querySelectorAll('.nav-link');
    const pageContainers = document.querySelectorAll('.page-container');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            pageContainers.forEach(page => {
                page.classList.remove('active');
                if (page.id === `${targetPage}-page`) {
                    page.classList.add('active');
                    
                    if (targetPage === 'tree') {
                        setTimeout(initFamilyTree, 10);
                    }
                }
            });
            
            window.scrollTo(0, 0);
        });
    });
    
    const eraItems = document.querySelectorAll('.era-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    eraItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        observer.observe(item);
    });
    
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'fadeIn 1.5s ease forwards';
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
let player;
let isMuted = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('bg-audio', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(30);
    
    const muteBtn = document.getElementById('mute-btn');
    muteBtn.addEventListener('click', function() {
        isMuted = !isMuted;
        if (isMuted) {
            event.target.mute();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            muteBtn.classList.add('muted');
        } else {
            event.target.unMute();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            muteBtn.classList.remove('muted');
        }
    });
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);