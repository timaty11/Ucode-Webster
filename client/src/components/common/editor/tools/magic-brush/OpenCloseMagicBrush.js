export function OpenCloseMagicBrush() {
    let obj2 = document.getElementById('advanced-brushes');
    let obj3 = document.getElementById('magic-brushes');
    obj3.style.display = 'block';
    obj2.style.display = 'none';
    imageBrushFlag = true;
    inkBrushFlag = false;
}

