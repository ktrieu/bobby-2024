const getStatePaths = (svg) => {
    const stateGroup = svg.getElementById("state-group");
    return Array.from(stateGroup.children).filter((node) => node.tagName === 'path')
}

const stateNames = {
    al: 'Alabama',
    ak: 'Alaska',
    az: 'Arizona',
    ar: 'Arkansas',
    ca: 'California',
    co: 'Colorado',
    ct: 'Connecticut',
    de: 'Delaware',
    fl: 'Florida',
    ga: 'Georgia',
    hi: 'Hawaii',
    id: 'Idaho',
    il: 'Illinois',
    in: 'Indiana',
    ia: 'Iowa',
    ks: 'Kansas',
    ky: 'Kentucky',
    la: 'Louisiana',
    me: 'Maine',
    md: 'Maryland',
    ma: 'Massachusetts',
    mi: 'Michigan',
    mn: 'Minnesota',
    ms: 'Mississippi',
    mo: 'Missouri',
    mt: 'Montana',
    ne: 'Nebraska',
    nv: 'Nevada',
    nh: 'New Hampshire',
    nj: 'New Jersey',
    nm: 'New Mexico',
    ny: 'New York',
    nc: 'North Carolina',
    nd: 'North Dakota',
    oh: 'Ohio',
    ok: 'Oklahoma',
    or: 'Oregon',
    pa: 'Pennsylvania',
    ri: 'Rhode Island',
    sc: 'South Carolina',
    sd: 'South Dakota',
    tn: 'Tennessee',
    tx: 'Texas',
    ut: 'Utah',
    vt: 'Vermont',
    va: 'Virginia',
    wa: 'Washington',
    wv: 'West Virginia',
    wi: 'Wisconsin',
    wy: 'Wyoming'
};

document.addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById("state-map");
    const message = document.getElementById("volunteer-message");

    const onStateClick = (code) => {
        message.textContent = `Thank for your interest! However, President Bobby has decided to do all the campaigning in ${stateNames[code]} by himself.`;
        message.hidden = false;
    }

    map.addEventListener("load", () => {
        const statePaths = getStatePaths(map.getSVGDocument());

        for (const path of statePaths) {
            path.onclick = () => onStateClick(path.className.baseVal);
            path.onmouseover = () => path.style.fill = "#DB1414";
            path.onmouseout = () => path.style.fill = "#027A0E";
        }
    })
})