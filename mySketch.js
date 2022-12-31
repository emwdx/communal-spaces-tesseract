// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

let pg,
    paletten,
    seed = 1e6 * fxrand(),
    dimW = 2400,
    dimH = 3396;
//seed = 545858
var coolorsCollection = [[{"name":"Lapis Lazuli","hex":"336699","rgb":[51,102,153],"cmyk":[67,33,0,40],"hsb":[210,67,60],"hsl":[210,50,40],"lab":[42,0,-33]},{"name":"Dark Sky Blue","hex":"86bbd8","rgb":[134,187,216],"cmyk":[38,13,0,15],"hsb":[201,38,85],"hsl":[201,51,69],"lab":[73,-10,-20]},{"name":"Charcoal","hex":"2f4858","rgb":[47,72,88],"cmyk":[47,18,0,65],"hsb":[203,47,35],"hsl":[203,30,26],"lab":[29,-5,-12]},{"name":"Granny Smith Apple","hex":"9ee493","rgb":[158,228,147],"cmyk":[31,0,36,11],"hsb":[112,36,89],"hsl":[112,60,74],"lab":[84,-37,33]},{"name":"Nyanza","hex":"daf7dc","rgb":[218,247,220],"cmyk":[12,0,11,3],"hsb":[124,12,97],"hsl":[124,64,91],"lab":[95,-14,10]}],[{"name":"Powder Blue","hex":"b8d8d8","rgb":[184,216,216],"cmyk":[15,0,0,15],"hsb":[180,15,85],"hsl":[180,29,78],"lab":[84,-11,-4]},{"name":"Cadet Blue","hex":"7a9e9f","rgb":[122,158,159],"cmyk":[23,1,0,38],"hsb":[182,23,62],"hsl":[182,16,55],"lab":[63,-12,-5]},{"name":"Deep Space Sparkle","hex":"4f6367","rgb":[79,99,103],"cmyk":[23,4,0,60],"hsb":[190,23,40],"hsl":[190,13,36],"lab":[41,-7,-5]},{"name":"Beige","hex":"eef5db","rgb":[238,245,219],"cmyk":[3,0,11,4],"hsb":[76,11,96],"hsl":[76,57,91],"lab":[95,-7,12]},{"name":"Orange Red Crayola","hex":"fe5f55","rgb":[254,95,85],"cmyk":[0,63,67,0],"hsb":[4,67,100],"hsl":[4,99,66],"lab":[62,60,38]}],[{"name":"Black Coral","hex":"545863","rgb":[84,88,99],"cmyk":[15,11,0,61],"hsb":[224,15,39],"hsl":[224,8,36],"lab":[37,1,-7]},{"name":"Electric Blue","hex":"00e8fc","rgb":[0,232,252],"cmyk":[100,8,0,1],"hsb":[185,100,99],"hsl":[185,100,49],"lab":[84,-39,-23]},{"name":"Outrageous Orange","hex":"f96e46","rgb":[249,110,70],"cmyk":[0,56,72,2],"hsb":[13,72,98],"hsl":[13,94,63],"lab":[63,51,48]},{"name":"Maize Crayola","hex":"f9c846","rgb":[249,200,70],"cmyk":[0,20,72,2],"hsb":[44,72,98],"hsl":[44,94,63],"lab":[83,5,68]},{"name":"Misty Rose","hex":"ffe3e3","rgb":[255,227,227],"cmyk":[0,11,11,0],"hsb":[0,11,100],"hsl":[0,100,95],"lab":[92,10,4]}],[{"name":"Key Lime","hex":"edf67d","rgb":[237,246,125],"cmyk":[4,0,49,4],"hsb":[64,49,96],"hsl":[64,87,73],"lab":[94,-19,57]},{"name":"Orchid Crayola","hex":"f896d8","rgb":[248,150,216],"cmyk":[0,40,13,3],"hsb":[320,40,97],"hsl":[320,88,78],"lab":[74,46,-18]},{"name":"Heliotrope","hex":"ca7df9","rgb":[202,125,249],"cmyk":[19,50,0,2],"hsb":[277,50,98],"hsl":[277,91,73],"lab":[65,51,-51]},{"name":"Majorelle Blue","hex":"724cf9","rgb":[114,76,249],"cmyk":[54,69,0,2],"hsb":[253,69,98],"hsl":[253,94,64],"lab":[46,58,-81]},{"name":"Dark Slate Blue","hex":"564592","rgb":[86,69,146],"cmyk":[41,53,0,43],"hsb":[253,53,57],"hsl":[253,36,42],"lab":[35,27,-40]}]]
const blank = [{"name":"Key Lime","hex":"edf67d","rgb":[255,255,255],"cmyk":[4,0,49,4],"hsb":[64,49,96],"hsl":[64,87,73],"lab":[94,-19,57]},{"name":"Orchid Crayola","hex":"f896d8","rgb":[255,255,255],"cmyk":[0,40,13,3],"hsb":[320,40,97],"hsl":[320,88,78],"lab":[74,46,-18]},{"name":"Heliotrope","hex":"ca7df9","rgb":[255,255,255],"cmyk":[19,50,0,2],"hsb":[277,50,98],"hsl":[277,91,73],"lab":[65,51,-51]},{"name":"Majorelle Blue","hex":"724cf9","rgb":[255,255,255],"cmyk":[54,69,0,2],"hsb":[253,69,98],"hsl":[253,94,64],"lab":[46,58,-81]},{"name":"Dark Slate Blue","hex":"564592","rgb":[255,255,255],"cmyk":[41,53,0,43],"hsb":[253,53,57],"hsl":[253,36,42],"lab":[35,27,-40]}]
NUM_CUBES_X = 13;
NUM_CUBES_Y = 13;
const COLOR_PAGE_WEIGHT = 1.0;
var NUM_LAYERS;
var LAYER_WIDTH; 
var LAYER_HEIGHT;
var colors;
var colorPage = false;
function windowResized() {
    resizeCanvas(.706713 * window.innerHeight, window.innerHeight),
    randomSeed(seed),
    noiseSeed(seed),
    createCanvas(.706713 * window.innerHeight, window.innerHeight),
    pg = createGraphics(2400, 3396),
    pg.strokeCap(SQUARE);
    paletten = int(random(colorScheme.length)),
    //paletten = 0,
    palette = colorScheme[paletten],
    shuffledPalette = [...palette].map(e => ({
        value: e,
        sort: random()
    })).sort((e, d) => e.sort - d.sort).map(({value: e}) => e),
    noLoop(),
    drawS()
}
function m_col(e) {
    let d = e.lastIndexOf("/"),
        g = e.slice(d + 1).split("-");
    for (let e = 0; e < g.length; e++)
        g[e] = "#" + g[e];
    return g
}
const colorScheme = [m_col("333333-888888-eeeeee"),m_col("ebe2cf-cac3b3-1d1e1b"), m_col("f9f6f2-ebe2cf-c5c8ba"), m_col("ebe2cf-2a2b29-1d1e1b"), m_col("2a2b29--bd9c75-1d1e1b"), m_col("ebe2cf-bd9c75-1d1e1b"), m_col("ebe2cf-f08100-e4032c-005d2e-2c52a0-1d1e1b"), m_col("ebe2cf-f08100-005d2e-2c52a0-1d1e1b"), m_col("ebe2cf-fab515-d7312e-2a71af-1d1e1b"), m_col("f9f6f2-ebe2cf-40483a-bd9c75"), m_col("a07c53-20315d-1c2342-1d1f2b"), m_col("f9f6f2-ebe2cf-2c52a0"), m_col("ebe2cf-c5c8ba-f8c1c1-2c52a0"), m_col("e9e8d2-c6ad93-ef7a00"), m_col("f9f6f2-ebe2cf-d7312e-40483a"), m_col("f9f6f2-e5cfb6-e88829-1d1e1b"), m_col("e5cfb6-e5a19a-de3921-df8d27-1d1e1b"), m_col("bd9c75-39472b-2a3320-505e3f-cec29d-1e2313"), m_col("ebe2cf-c5c8ba-262d49-e4032c"), m_col("f9f6f2-ebe2cf-cec29d-1d1e1b"), m_col("ebe2cf-bc9a56-b76f30-d80f15-1d1e1b"), m_col("1d1e1b-a28c5e-a96b33-e5b2ab-ebe2cf"), m_col("b6b992-151a1b-224870-d83715-f7f8e6"), m_col("2c2f7a-005742-8b5ba2-f8aa00-e00814-1d1e1b-ebe2cf"), m_col("2b4d9d-e83b42-f49800-1d2747-005028-f7bab6-d49236-ebe2cf"), m_col("ebe2cf-8e8780-fab515-d7312e-2a71af-ad7347-1d1e1b"), m_col("d2b0a3-efd1ae-f39b00-ec6907-202320"), m_col("703665-e84b1b-bf6a25-ebe2cf")],
    schemeNames = ["Blank","Shirokuro", "Albergris", "Edo", "Asakusa", "Hinoki", "Beau Vallon", "Ipanema", "Dessau", "Matcha Dango", "Sashiko", "Blueprint", "Akiba", "Hara-mel", "Napoli", "Upper East Side", "Toucan", "Arashiyama", "Ex Astris", "Marden Gras", "Kabuki", "Mojave", "Brubeck", "Nineties", "Pompidou", "Bregenz", "Toplo", "Hendrix"];
let palette,
    mosaicFreq,
    edgex,
    edgey,
    edge,
    cubeInRow,
    cubeType,
    border = 150,
    innerMargin = 300,
    edgexList = [1490, 744, 496, 373],
    edgeyList = [860, 430, 282, 215],
    edgeList = [860, 430, 282, 215],
    minCubes = [1, 2, 3, 4],
  
    maxCubes = [1, 6, 14, 28],
    cutoff = 80,
    ribbonT = "Standard",
    pa = .5,
    edges = [];
var sortedEdges;
let shuffledPalette,
    bg;
function setup() {
    LAYER_WIDTH= 0.03*windowHeight;
LAYER_HEIGHT= 0.03*windowHeight;
  NUM_LAYERS = round(0.75*height/10);
  
  angleMode(DEGREES)
    windowResized()
}
function drawS() {
    edges = [];
    mosaicFreq = random(.1, .5);
    //pg.noStroke();
    let e = [1, 64, 25, 10],

        d = [];
    for (let g = 0; g < e[0]; g++)
        d.push(1);
    for (let g = 0; g < e[1]; g++)
        d.push(2);
    for (let g = 0; g < e[2]; g++)
        d.push(3);
    
    for (let g = 0; g < e[3]; g++)
        d.push(3);
        
    let g = random(d);
    edgex = edgexList[g - 1],
    edgey = edgeyList[g - 1],
    edge = edgeList[g - 1],
    pg.background("#fff6e4"),
    bg = shuffledPalette[0];
    let s = shuffledPalette[1],
        o = bg;
    /*
        if(!colorPage){
            pg.fill(bg)
        }
        else{
            pg.fill(255)
            pg.stroke(0)
            pg.strokeWeight(COLOR_PAGE_WEIGHT)
        }
        */
    colorPage?pg.fill(255):pg.fill(bg),
    colorPage?pg.stroke(255):pg.noStroke(),
    pg.rect(border, border, dimW - 2 * border, dimH - 2 * border);
    for (let e = 0; e < 1e4; e++)
        colorPage?pg.fill(255):pg.fill(s),
        colorPage?pg.stroke(0):pg.noStroke(),
        //pg.fill(s),
        pg.ellipse(random(border, dimW - border), random(border, dimH - border), 1, 1);
    let r = 0,
        t = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3];
    cubeType = "Normal";
    /*random() < .05 && (t = [4], o = shuffledPalette[2], cubeType = "Solid");*/
    let a = dimW / 2 - edgex / 2,
        l = random(-100, 3 * dimH / 4 - border - edgey / 2 - edge),
        i = random([1, 2]),
        y = 0;
    if (1 == g)
        l = random(edgey / 2 + border, 3 * dimH / 4 - border - edgey / 2 - edge),
        cubeList(random(t), a, l, o, s),
        r++;
    else if (2 == g) {
        if (1 == i)
            for (let e = 0; e < 100; e += 3)
                random() < pa && isValidCube(a, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a - edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a - edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a + edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a + edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                y++;
        else if (2 == i) {
            let e = random(cutoff / 100 * dimH, 1.5 * dimH),
                d = [1, 2],
                g = random(d);
            for (let l = 0; l < 100; l += 3) {
                let l = random(d);
                1 == g ? (random() < pa && isValidCube(a, e) && (cubeList(random(t), a, e, o, s), r++), e -= 1 == l ? edge : edge + edgey / 2) : (random() < pa && isValidCube(a - edgex / 2, e) && (cubeList(random(t), a - edgex / 2, e, o, s), r++), random() < pa && isValidCube(a + edgex / 2, e) && (cubeList(random(t), a + edgex / 2, e, o, s), r++), e -= 2 == l ? edge : edge + edgey / 2),
                g = l
            }
        }
    } else if (3 == g) {
        if (1 == i)
            for (let e = 0; e < 200; e += 3)
                random() < pa && isValidCube(a, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a - edgex, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a - edgex, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a + edgex, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a + edgex, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a - edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a - edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a + edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a + edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                y++;
        else if (2 == i) {
            let e = random(cutoff / 100 * dimH, 1.5 * dimH),
                d = [1, 2],
                g = random(d);
            for (let l = 0; l < 200; l += 3) {
                let l = random(d);
                1 == g ? (random() < pa && isValidCube(a, e) && (cubeList(random(t), a, e, o, s), r++), random() < pa && isValidCube(a - edgex, e) && (cubeList(random(t), a - edgex, e, o, s), r++), random() < pa && isValidCube(a + edgex, e) && (cubeList(random(t), a + edgex, e, o, s), r++), e -= 1 == l ? edge : edge + edgey / 2) : (random() < pa && isValidCube(a - edgex / 2, e) && (cubeList(random(t), a - edgex / 2, e, o, s), r++), random() < pa && isValidCube(a + edgex / 2, e) && (cubeList(random(t), a + edgex / 2, e, o, s), r++), e -= 2 == l ? edge : edge + edgey / 2),
                g = l
            }
        }
    } else if (4 == g)
        if (1 == i)
            for (let e = 0; e < 300; e += 3)
                random() < pa && isValidCube(a, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a - edgex, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a - edgex, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a + edgex, l + 2 * y * (edgey / 2 + edge)) && (cubeList(random(t), a + edgex, l + 2 * y * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a - edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a - edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a + edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a + edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a - 3 * edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a - 3 * edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                random() < pa && isValidCube(a + 3 * edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge)) && (cubeList(random(t), a + 3 * edgex / 2, l + (2 * y + 1) * (edgey / 2 + edge), o, s), r++),
                y++;
        else if (2 == i) {
            let e = random(cutoff / 100 * dimH, 1.5 * dimH),
                d = [1, 2],
                g = random(d);
            for (let l = 0; l < 300; l += 3) {
                let l = random(d);
                1 == g ? (random() < pa && isValidCube(a, e) && (cubeList(random(t), a, e, o, s), r++), random() < pa && isValidCube(a - edgex, e) && (cubeList(random(t), a - edgex, e, o, s), r++), random() < pa && isValidCube(a + edgex, e) && (cubeList(random(t), a + edgex, e, o, s), r++), e -= 1 == l ? edge : edge + edgey / 2) : (random() < pa && isValidCube(a - edgex / 2, e) && (cubeList(random(t), a - edgex / 2, e, o, s), r++), random() < pa && isValidCube(a + edgex / 2, e) && (cubeList(random(t), a + edgex / 2, e, o, s), r++), random() < pa && isValidCube(a - 3 * edgex / 2, e) && (cubeList(random(t), a - 3 * edgex / 2, e, o, s), r++), random() < pa && isValidCube(a + 3 * edgex / 2, e) && (cubeList(random(t), a + 3 * edgex / 2, e, o, s), r++), e -= 2 == l ? edge : edge + edgey / 2),
                g = l
            }
        }
    renderCubes(g, i, r)
    
}
function isValidCube(e, d) {
    return !(e < border + innerMargin) && (!(e + edgex > dimW - border - innerMargin) && (!(d - edgey / 2 < border) && !(d + edgey / 2 + edge > dimH - border)))
}
function cube(e, d, g, s, o) {
    console.log("individual cube: "+e+","+d+","+g+","+s+","+o+", edgex: "+edgex)

    pg.strokeWeight(COLOR_PAGE_WEIGHT)
    /*
    if(!colorPage){
        pg.fill(s)
        pg.stroke(o)
    }
    else{
        pg.fill(255)
        pg.stroke(0)
        pg.strokeWeight(COLOR_PAGE_WEIGHT)
    }
    
  */
    
    colorPage?pg.fill(255):pg.fill(s);
     
    //drawSlottedTower(pg,d+0.866*edgey,g+0.89*edgex,NUM_CUBES_X,NUM_CUBES_Y,5,edgey/NUM_CUBES_X,edgex/NUM_CUBES_Y*0.6,[color(214,229,227),color(102,99,112),color(40,0,0),color(240,167,160)])
    let zOffsetBase = 0.2*edgex/NUM_CUBES_Y*0.575
    //shuffle(shuffledPalette)
    drawSlottedTower(pg,d+0.866*edgey,g+0.88*edgex+zOffsetBase,NUM_CUBES_X,NUM_CUBES_Y,5,edgey/NUM_CUBES_X,edgex/NUM_CUBES_Y*0.575,[shuffledPalette[2],shuffledPalette[1],shuffledPalette[0]])

    if (1 == e) {
        let e = d,
            r = g;
        pg.fill(s),
        pg.stroke(o),
        pg.strokeWeight(2);
        for (let e = 0; e < 5; e++) {
            for (let e = 0; e < 5; e++)
                posx = d + e * edgex / 10,
                posy = g - e * edgey / 10,
                random() < 0.2 && pg.noFill(),
                pg.quad(posx, posy, posx + edgex / 10, posy - edgey / 10, posx + edgex / 5, posy, posx + edgex / 10, posy + edgey / 10);
            d += edgex / 10,
            g += edgey / 10
        }
        d = e,
        g = r;
        for (let e = 0; e < 21; e++) {
            for (let e = 0; e < 5; e++)
                posx = d + e * edgex / 10,
                posy = g + e * edgey / 10,
                random() < mosaicFreq && pg.fill(o),
                pg.quad(posx, posy, posx + edgex / 10, posy + edgey / 10, posx + edgex / 10, posy + edgey / 10 + edge / 21, posx, posy + edge / 21),
                pg.fill(s);
            g += edge / 21
        }
        d = e + edgex / 2,
        g = r + edgey / 2;
        for (let e = 0; e < 21; e++) {
            
            for (let e = 0; e < 5; e++)
                posx = d + e * edgex / 10,
                posy = g - e * edgey / 10,
                random() < mosaicFreq && pg.fill(o),
                pg.quad(posx, posy, posx + edgex / 10, posy - edgey / 10, posx + edgex / 10, posy - edgey / 10 + edge / 21, posx, posy + edge / 21),
                pg.fill(s);
            g += edge / 21
        }
    } else if (2 == e) {
        let e = d,
            r = g;
        pg.fill(s),
        pg.stroke(o),
        pg.strokeWeight(2);
        for (let e = 0; e < 5; e++) {
            for (let e = 0; e < 5; e++)
                posx = d + e * edgex / 10,
                posy = g - e * edgey / 10,
                pg.quad(posx, posy, posx + edgex / 10, posy - edgey / 10, posx + edgex / 5, posy, posx + edgex / 10, posy + edgey / 10);
            d += edgex / 10,
            g += edgey / 10
        }
        d = e,
        g = r;
        for (let e = 0; e < 21; e++) {
            if (e > 7)
                for (let e = 0; e < 5; e++)
                    posx = d + e * edgex / 10,
                    posy = g + e * edgey / 10,
                    random() < mosaicFreq && pg.fill(o),
                    pg.noFill(),
                    pg.quad(posx, posy, posx + edgex / 10, posy + edgey / 10, posx + edgex / 10, posy + edgey / 10 + edge / 21, posx, posy + edge / 21),
                    pg.fill(s);
            else if (0 == e)
                for (let e = 0; e < 5; e++)
                    posx = d + e * edgex / 10,
                    posy = g + e * edgey / 10,
                    /*random() < mosaicFreq && pg.fill(o),*/
                    random()<0.5 && pg.noFill(),
                    pg.quad(posx, posy, posx + edgex / 10, posy + edgey / 10, posx + edgex / 10, posy + edgey / 10 + 8 * edge / 21, posx, posy + 8 * edge / 21);
                    /*pg.fill(s);*/
            g += edge / 21
        }
        d = e + edgex / 2,
        g = r + edgey / 2;
        for (let e = 0; e < 21; e++) {
            if (e > 7)
                for (let e = 0; e < 5; e++)
                    posx = d + e * edgex / 10,
                    posy = g - e * edgey / 10,
                    random() < mosaicFreq && pg.fill(o),
                    pg.quad(posx, posy, posx + edgex / 10, posy - edgey / 10, posx + edgex / 10, posy - edgey / 10 + edge / 21, posx, posy + edge / 21),
                    pg.fill(s);
            else if (0 == e)
                for (let e = 0; e < 5; e++)
                    posx = d + e * edgex / 10,
                    posy = g - e * edgey / 10,
                    random() < mosaicFreq && pg.fill(o),
                    pg.quad(posx, posy, posx + edgex / 10, posy - edgey / 10, posx + edgex / 10, posy - edgey / 10 + 8 * edge / 21, posx, posy + 8 * edge / 21),
                    pg.fill(s);
            g += edge / 21
        }
    } else if (3 == e) {
        pg.fill(255, 0),
        pg.stroke(o),
        pg.strokeWeight(2);
        let e = random();
        if (e < .33)
            pg.quad(d, g, d + edgex / 2, g - edgey / 2, d + edgex, g, d + edgex / 2, g + edgey / 2),
            pg.quad(d, g + edge, d + edgex / 2, g + edgey / 2, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge),
            pg.quad(d, g, d + edgex / 2, g + edgey / 2, d + edgex / 2, g + edgey / 2 + edge, d, g + edge),
            pg.quad(d + edgex / 2, g + edgey / 2, d + edgex, g, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge);
        else if (e < .66) {
            pg.quad(d, g, d + edgex / 2, g - edgey / 2, d + edgex, g, d + edgex / 2, g + edgey / 2),
            pg.quad(d, g + edge, d + edgex / 2, g + edgey / 2, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge),
            pg.quad(d, g, d + edgex / 2, g + edgey / 2, d + edgex / 2, g + edgey / 2 + edge, d, g + edge),
            pg.quad(d + edgex / 2, g + edgey / 2, d + edgex, g, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge);
            for (let e = 0; e < 24; e++)
                pg.line(d + (e + 1) * edgex / 50, g + (e + 1) * edgey / 50, d + (e + 1) * edgex / 50, g + (e + 1) * edgey / 50 + edge),
                pg.line(d + edgex - (e + 1) * edgex / 50, g + (e + 1) * edgey / 50, d + edgex - (e + 1) * edgex / 50, g + (e + 1) * edgey / 50 + edge)
        } else {
            pg.quad(d, g, d + edgex / 2, g - edgey / 2, d + edgex, g, d + edgex / 2, g + edgey / 2),
            pg.quad(d, g + edge, d + edgex / 2, g + edgey / 2, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge),
            pg.quad(d, g, d + edgex / 2, g + edgey / 2, d + edgex / 2, g + edgey / 2 + edge, d, g + edge),
            pg.quad(d + edgex / 2, g + edgey / 2, d + edgex, g, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge);
            for (let e = 0; e < 4; e++)
                pg.line(d + (e + 1) * edgex / 10, g + (e + 1) * edgey / 10, d + (e + 1) * edgex / 10, g + (e + 1) * edgey / 10 + edge),
                pg.line(d + edgex - (e + 1) * edgex / 10, g + (e + 1) * edgey / 10, d + edgex - (e + 1) * edgex / 10, g + (e + 1) * edgey / 10 + edge)
        }
    }
    4 == e && (pg.fill(s), pg.noStroke(), pg.quad(d, g, d + edgex / 2, g - edgey / 2, d + edgex, g, d + edgex / 2, g + edgey / 2), pg.quad(d, g + edge, d + edgex / 2, g + edgey / 2, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge), pg.quad(d, g, d + edgex / 2, g + edgey / 2, d + edgex / 2, g + edgey / 2 + edge, d, g + edge), pg.quad(d + edgex / 2, g + edgey / 2, d + edgex, g, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge))
}

function cubeList(e, d, g, s, o) {
    edges.push([e, d, g, s, o])
}
function isCubeFloating() {
    let e = [];
    for (var d = 0; d < edges.length; d++) {
        let s = 0;
        for (var g = 0; g < edges.length; g++)
            edges[d][1] == edges[g][1] && edges[d][2] == edges[g][2] || (edges[d][1] == edges[g][1] && edges[d][2] - edge == edges[g][2] ? s++ : edges[d][1] == edges[g][1] && edges[d][2] + edge == edges[g][2] ? s++ : edges[d][1] - edgex == edges[g][1] && edges[d][2] == edges[g][2] ? s++ : edges[d][1] + edgex == edges[g][1] && edges[d][2] == edges[g][2] ? s++ : edges[d][1] - edgex / 2 == edges[g][1] && edges[d][2] - edgey / 2 - edge == edges[g][2] ? s++ : edges[d][1] + edgex / 2 == edges[g][1] && edges[d][2] - edgey / 2 - edge == edges[g][2] ? s++ : edges[d][1] - edgex / 2 == edges[g][1] && edges[d][2] + edgey / 2 + edge == edges[g][2] ? s++ : edges[d][1] + edgex / 2 == edges[g][1] && edges[d][2] + edgey / 2 + edge == edges[g][2] && s++);
        e.push(s)
    }
    return e
}
function renderCubes(e, d, g) {
    let s;
    //console.log("cubes: "+e+","+d+","+g)
 
    if (sortedEdges = [...edges].sort(function(e, d) {
        return e[2] - d[2]
    }), 1 == e)
        return cube(edges[0][0], edges[0][1], edges[0][2], edges[0][3], edges[0][4]), s = renderRibbons(e), window.$fxhashFeatures = {
            Palette: schemeNames[paletten],
            "Number of Cubes": g,
            "Number of Ribbons": s,
            "Cube Type": cubeType,
            "Ribbon Type": ribbonT,
            "Zoom Level": e
        }, image(pg, 0, 0, .706713 * window.innerHeight, window.innerHeight), 0;
    if (totalNeighbours = isCubeFloating(), g < minCubes[e - 1])
        return drawS(), 0;
    for (let e = 0; e < totalNeighbours.length; e++)
        if (0 == totalNeighbours[e])
            return drawS(), 0;
    let o = 0;
    for (let e = 0; e < totalNeighbours.length; e++)
        totalNeighbours[e] < 2 && o++;
    if (o > 2)
        return drawS(), 0;
    for (let e = 0; e < sortedEdges.length - 1; e++)
        if (sortedEdges[e + 1][2] - sortedEdges[e][2] > edgey / 2 + edge)
            return drawS(), 0;
    for (var r = 0; r < edges.length; r++){
        d = edges[r][1];
        g = edges[r][2];
        s = edges[r][4];
        let circleColor = color(s)
        circleColor.setAlpha(150)
        colorPage?pg.fill(255):pg.fill(circleColor);
        pg.circle(d+0.5*edgex,g+0.5*edgey,0.9*edgey*2.3)
        circleColor.setAlpha(50)
        colorPage?pg.fill(255):pg.fill(circleColor);
        colorPage?pg.stroke(0):pg.noStroke();
        pg.circle(d+0.5*edgex,g+0.5*edgey,0.866*edgey*2.3)
        
    }
    for (var r = 0; r < edges.length; r++){
         cube(edges[r][0], edges[r][1], edges[r][2], edges[r][3], edges[r][4]);
    }
    s = renderRibbons(e),
    image(pg, 0, 0, .706713 * window.innerHeight, window.innerHeight),
    window.$fxhashFeatures = {
        Palette: schemeNames[paletten],
        "Number of Cubes": g,
        "Number of Ribbons": s,
        "Cube Type": cubeType,
        "Ribbon Type": ribbonT,
        "Zoom Level": e
    }
}
function renderRibbons(e) {
    pg.noStroke();
    let d,
        g,
        s = int(random(4, 11)),
        o = edgex / 10,
        r = 10 * e,
        t = [],
        a = !0,
        l = [];
    random() < .1 && (g = 3, ribbonT = "Color Cycling");
    for (let i = 0; i < s;) {
        a = !0,
        3 != g && (g = random([1, 1, 1, 1, 2]));
        let s = int(random(r)),
            y = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))]);
        y.levels[3] = 242.25;
        let n = color(y.levels[0], y.levels[1], y.levels[2], y.levels[3]);
        d = s >= r / 2 ? dimW / 2 + o * (s - r / 2) : dimW / 2 - o * s,
        -1 === t.indexOf(d) ? t.push(d) : a = !1,
        a && (l.push([g, d, o, n, e]), i++)
    }
    sortedParams = [...l].sort(function(e, d) {
        return d[0] - e[0]
    });
    for (let e = 0; e < sortedParams.length; e++)
        ribbon(sortedParams[e][0], sortedParams[e][1], sortedParams[e][2], sortedParams[e][3], sortedParams[e][4]);
    return sortedParams.length
}
function ribbon(e, d, g, s, o) {
    if (1 == e) {
        let e,
            r,
            t = border,
            a = d,
            l = 0,
            i = 0,
            y = 0,
            n = -1,
            p = sortedEdges[0][2];
        colorPage?pg.fill(255):pg.fill(s);
        colorPage?pg.stroke(0):pg.noStroke();
        for (let d = 0; d < sortedEdges.length; d++) {
            if (a > sortedEdges[d][1] && a < sortedEdges[d][1] + edgex) {
                if (l = a - sortedEdges[d][1] >= edgex / 2 ? -1 : 1, n == sortedEdges[d][1] && (sortedEdges[d][2] - p) % edgey == 0)
                    continue;
                r = (e = (a - sortedEdges[d][1]) / g) >= 5 ? 5 - (e - 5) % 5 : e % 5,
                0 == i && (-1 == y ? (pg.quad(a, t, a + g, t + edgey / 10, sortedEdges[d][1] + g * (e + 1), sortedEdges[d][2] - r * edgey / 10 - l * edgey / 10, sortedEdges[d][1] + g * e, sortedEdges[d][2] - r * edgey / 10), a = sortedEdges[d][1] + g * (e + 1), t = sortedEdges[d][2] - r * edgey / 10 - l * edgey / 10) : 1 == y ? (pg.quad(a, t, a + g, t - edgey / 10, sortedEdges[d][1] + g * (e + 1), sortedEdges[d][2] - r * edgey / 10 - l * edgey / 10, sortedEdges[d][1] + g * e, sortedEdges[d][2] - r * edgey / 10), a = sortedEdges[d][1] + g * (e + 1), t = sortedEdges[d][2] - r * edgey / 10 - l * edgey / 10) : (pg.quad(a, t, a + g, t, sortedEdges[d][1] + g * (e + 1), sortedEdges[d][2] - r * edgey / 10 - l * edgey / 10, sortedEdges[d][1] + g * e, sortedEdges[d][2] - r * edgey / 10), a = sortedEdges[d][1] + g * (e + 1), t = sortedEdges[d][2] - r * edgey / 10 - l * edgey / 10)),
                -1 == l ? (pg.quad(a, t, a - g, t + l * edgey / 10, sortedEdges[d][1] + g * (e - 4) - g, sortedEdges[d][2] + (5 - r) * edgey / 10, sortedEdges[d][1] + g * (e - 4), sortedEdges[d][2] + (5 - r) * edgey / 10 - l * edgey / 10), random() < .9 && crowds(a - g, t + l * edgey / 10, sortedEdges[d][1] + g * (e - 4) - g, sortedEdges[d][2] + (5 - r) * edgey / 10, l, o), a = sortedEdges[d][1] + g * (e - 4) - g, t = sortedEdges[d][2] + (5 - r) * edgey / 10) : 1 == l && (pg.quad(a, t, a - g, t + l * edgey / 10, sortedEdges[d][1] + g * (e + 5), sortedEdges[d][2] + (5 - r) * edgey / 10, sortedEdges[d][1] + g * (e + 5) + g, sortedEdges[d][2] + (5 - r) * edgey / 10 - l * edgey / 10), random() < .9 && crowds(a - g, t + l * edgey / 10, sortedEdges[d][1] + g * (e + 5), sortedEdges[d][2] + (5 - r) * edgey / 10, l, o), a = sortedEdges[d][1] + g * (e + 5), t = sortedEdges[d][2] + (5 - r) * edgey / 10),
                y = l,
                n = sortedEdges[d][1]
            }
            sortedEdges[d][2] >= p + edge && (i = 0, p = sortedEdges[d][2])
        }
        -1 == y ? pg.quad(a, t, a + g, t + edgey / 10, a + g, dimH - border, a, dimH - border) : 1 == y ? pg.quad(a, t, a + g, t - edgey / 10, a + g, dimH - border, a, dimH - border) : pg.quad(a, t, a + g, t, a + g, dimH - border, a, dimH - border)
    } else if (2 == e) {
        let e,
            o,
            r = border,
            t = d,
            a = 0,
            l = 0,
            i = 0,
            y = -1,
            n = sortedEdges[0][2];
        //pg.fill(s);
        colorPage?pg.fill(255):pg.fill(s);
        colorPage?pg.stroke(0):pg.noStroke();
        for (let d = 0; d < sortedEdges.length; d++) {
            if (t > sortedEdges[d][1] && t < sortedEdges[d][1] + edgex) {
                if (a = t - sortedEdges[d][1] >= edgex / 2 ? -1 : 1, y == sortedEdges[d][1] && (sortedEdges[d][2] - n) % edgey == 0)
                    continue;
                if (o = (e = (t - sortedEdges[d][1]) / g) >= 5 ? 5 - (e - 5) % 5 : e % 5, 0 == l)
                    if (-1 == i) {
                        for (let s = 0; s < 5; s++)
                            pg.quad(t + 2 * s * g / 10, r + 2 * s * edgey / 100, t + (2 * s + 1) * g / 10, r + (2 * s + 1) * edgey / 100, sortedEdges[d][1] + g * (e + 1) - (g - (2 * s + 1) * g / 10), sortedEdges[d][2] - o * edgey / 10 - a * edgey * (2 * s + 1) / 100, sortedEdges[d][1] + g * e + 2 * s * g / 10, sortedEdges[d][2] - o * edgey / 10 - 2 * s * (a * edgey) / 100);
                        t = sortedEdges[d][1] + g * (e + 1),
                        r = sortedEdges[d][2] - o * edgey / 10 - a * edgey / 10
                    } else if (1 == i) {
                        for (let s = 0; s < 5; s++)
                            pg.quad(t + 2 * s * g / 10, r - 2 * s * edgey / 100, t + (2 * s + 1) * g / 10, r - (2 * s + 1) * edgey / 100, sortedEdges[d][1] + g * (e + 1) - (g - (2 * s + 1) * g / 10), sortedEdges[d][2] - o * edgey / 10 - a * edgey * (2 * s + 1) / 100, sortedEdges[d][1] + g * e + 2 * s * g / 10, sortedEdges[d][2] - o * edgey / 10 - 2 * s * (a * edgey) / 100);
                        t = sortedEdges[d][1] + g * (e + 1),
                        r = sortedEdges[d][2] - o * edgey / 10 - a * edgey / 10
                    } else {
                        for (let s = 0; s < 5; s++)
                            pg.quad(t + 2 * s * g / 10, r, t + (2 * s + 1) * g / 10, r, sortedEdges[d][1] + g * (e + 1) - (g - (2 * s + 1) * g / 10), sortedEdges[d][2] - o * edgey / 10 - a * edgey * (2 * s + 1) / 100, sortedEdges[d][1] + g * e + 2 * s * g / 10, sortedEdges[d][2] - o * edgey / 10 - 2 * s * (a * edgey) / 100);
                        t = sortedEdges[d][1] + g * (e + 1),
                        r = sortedEdges[d][2] - o * edgey / 10 - a * edgey / 10
                    }
                if (-1 == a) {
                    for (let s = 0; s < 5; s++)
                        pg.quad(t - (2 * s + 1) * g / 10, r + a * edgey * (2 * s + 1) / 100, t - (2 * s + 2) * g / 10, r + a * edgey * (2 * s + 2) / 100, sortedEdges[d][1] + g * (e - 4) - (2 * s + 2) * g / 10, sortedEdges[d][2] + (5 - o) * edgey / 10 - a * edgey * (10 - 2 * s - 2) / 100, sortedEdges[d][1] + g * (e - 4) - (2 * s + 1) * g / 10, sortedEdges[d][2] + (5 - o) * edgey / 10 - a * edgey * (10 - 2 * s - 1) / 100);
                    t = sortedEdges[d][1] + g * (e - 4) - g,
                    r = sortedEdges[d][2] + (5 - o) * edgey / 10
                } else if (1 == a) {
                    for (let s = 0; s < 5; s++)
                        pg.quad(t - (2 * s + 1) * g / 10, r + a * edgey * (2 * s + 1) / 100, t - (2 * s + 2) * g / 10, r + a * edgey * (2 * s + 2) / 100, sortedEdges[d][1] + g * (e + 5) + (g - (2 * s + 2) * g / 10), sortedEdges[d][2] + (5 - o) * edgey / 10 - a * edgey * (10 - (2 * s + 2)) / 100, sortedEdges[d][1] + g * (e + 5) + (g - (2 * s + 1) * g / 10), sortedEdges[d][2] + (5 - o) * edgey / 10 - a * edgey * (10 - (2 * s + 1)) / 100);
                    t = sortedEdges[d][1] + g * (e + 5),
                    r = sortedEdges[d][2] + (5 - o) * edgey / 10
                }
                i = a,
                y = sortedEdges[d][1]
            }
            sortedEdges[d][2] >= n + edge && (l = 0, n = sortedEdges[d][2])
        }
        
        if (-1 == i){
            colorPage?pg.fill(255):pg.fill(s);
        colorPage?pg.stroke(0):pg.noStroke();
            for (let e = 0; e < 5; e++)
                pg.quad(t + 2 * e * g / 10, r + 2 * e * edgey / 100, t + (2 * e + 1) * g / 10, r + (2 * e + 1) * edgey / 100, t + (2 * e + 1) * g / 10, dimH - border, t + 2 * e * g / 10, dimH - border);
        }
        else if (1 == i){
            for (let e = 0; e < 5; e++)
                pg.quad(t + 2 * e * g / 10, r - 2 * e * edgey / 100, t + (2 * e + 1) * g / 10, r - (2 * e + 1) * edgey / 100, t + (2 * e + 1) * g / 10, dimH - border, t + 2 * e * g / 10, dimH - border);
        }
        else{
            for (let e = 0; e < 5; e++)
                pg.quad(t + 2 * e * g / 10, r, t + (2 * e + 1) * g / 10, r, t + (2 * e + 1) * g / 10, dimH - border, t + 2 * e * g / 10, dimH - border)
        }
    } else {
        let e,
            r,
            t,
            a,
            l = border,
            i = d,
            y = 0,
            n = 0,
            p = 0,
            f = -1,
            b = sortedEdges[0][2];
        //pg.fill(s);
        colorPage?pg.fill(255):pg.fill(s);
        colorPage?pg.stroke(0):pg.noStroke();
        for (let d = 0; d < sortedEdges.length; d++) {
            if (i > sortedEdges[d][1] && i < sortedEdges[d][1] + edgex) {
                if (y = i - sortedEdges[d][1] >= edgex / 2 ? -1 : 1, f == sortedEdges[d][1] && (sortedEdges[d][2] - b) % edgey == 0)
                    continue;
                a = (t = (i - sortedEdges[d][1]) / g) >= 5 ? 5 - (t - 5) % 5 : t % 5,
                (e = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))])).levels[3] = 242.25,
                r = color(e.levels[0], e.levels[1], e.levels[2], e.levels[3]),
                colorPage?pg.fill(255):pg.fill(r)
                colorPage?pg.stroke(0):pg.noStroke(),
                //pg.fill(r),
                0 == n && (-1 == p ? (pg.quad(i, l, i + g, l + edgey / 10, sortedEdges[d][1] + g * (t + 1), sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10, sortedEdges[d][1] + g * t, sortedEdges[d][2] - a * edgey / 10), i = sortedEdges[d][1] + g * (t + 1), l = sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10) : 1 == p ? (pg.quad(i, l, i + g, l - edgey / 10, sortedEdges[d][1] + g * (t + 1), sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10, sortedEdges[d][1] + g * t, sortedEdges[d][2] - a * edgey / 10), i = sortedEdges[d][1] + g * (t + 1), l = sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10) : (pg.quad(i, l, i + g, l, sortedEdges[d][1] + g * (t + 1), sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10, sortedEdges[d][1] + g * t, sortedEdges[d][2] - a * edgey / 10), i = sortedEdges[d][1] + g * (t + 1), l = sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10)),
                (e = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))])).levels[3] = 242.25,
                r = color(e.levels[0], e.levels[1], e.levels[2], e.levels[3]),
                colorPage?pg.fill(255):pg.fill(r),
                colorPage?pg.stroke(0):pg.noStroke(),
                //pg.fill(r),
                -1 == y ? (pg.quad(i, l, i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t - 4) - g, sortedEdges[d][2] + (5 - a) * edgey / 10, sortedEdges[d][1] + g * (t - 4), sortedEdges[d][2] + (5 - a) * edgey / 10 - y * edgey / 10), random() < .9 && crowds(i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t - 4) - g, sortedEdges[d][2] + (5 - a) * edgey / 10, y, o), i = sortedEdges[d][1] + g * (t - 4) - g, l = sortedEdges[d][2] + (5 - a) * edgey / 10) : 1 == y && (pg.quad(i, l, i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t + 5), sortedEdges[d][2] + (5 - a) * edgey / 10, sortedEdges[d][1] + g * (t + 5) + g, sortedEdges[d][2] + (5 - a) * edgey / 10 - y * edgey / 10), random() < .9 && crowds(i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t + 5), sortedEdges[d][2] + (5 - a) * edgey / 10, y, o), i = sortedEdges[d][1] + g * (t + 5), l = sortedEdges[d][2] + (5 - a) * edgey / 10),
                p = y,
                f = sortedEdges[d][1]
            }
            sortedEdges[d][2] >= b + edge && (n = 0, b = sortedEdges[d][2])
        }
        (e = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))])).levels[3] = 242.25,
        r = color(e.levels[0], e.levels[1], e.levels[2], e.levels[3]),
        colorPage?pg.fill(255):pg.fill(r);
        colorPage?pg.stroke(0):pg.noStroke();
        //pg.fill(r),
        -1 == p ? pg.quad(i, l, i + g, l + edgey / 10, i + g, dimH - border, i, dimH - border) : 1 == p ? pg.quad(i, l, i + g, l - edgey / 10, i + g, dimH - border, i, dimH - border) : pg.quad(i, l, i + g, l, i + g, dimH - border, i, dimH - border)
    }
}
function hexToRgb(e) {
    e = e.replace("#", "");
    var d = parseInt(e, 16);
    return color(d >> 16 & 255, d >> 8 & 255, 255 & d)
}
function crowds(e, d, g, s, o, r) {
    let t = random([1.5, 1.25, 1, .75, .5, .33]);
    if (1 == o) {
        for (let o = e, r = d; o < g && r < s; o += t * (g - e) / 50, r += .57 * t * (g - e) / 50) {

            let e = random(edgex / 10);
            pg.line(o + e, r - .57 * e, o + e, r - .57 * e - edge / 21 * .6)
        }
        pg.noStroke()
    } else {
        for (let o = e, r = d; o > g && r < s; o -= t * (e - g) / 50, r += .57 * t * (e - g) / 50) {
       
            pg.stroke(random(shuffledPalette)),
            pg.strokeWeight(edge / 5 / 25 * .6);
            let e = random(edgex / 10);
            pg.line(o + e, r + .57 * e, o + e, r + .57 * e - edge / 21 * .6)
        }
        pg.noStroke()
    }
}
function keyPressed() {
    if( "s" == key){
        save(pg, parseInt(seed) + ".png")
    }
    else if("c" == key){
        colorPage = !colorPage
        resizeCanvas(.706713 * window.innerHeight, window.innerHeight),
    randomSeed(seed),
    noiseSeed(seed),
    //createCanvas(.706713 * window.innerHeight, window.innerHeight),
    //pg = createGraphics(2400, 3396),
    paletten = int(random(colorScheme.length)),
    //paletten = 0,
    palette = colorScheme[paletten],
    shuffledPalette = [...palette].map(e => ({
        value: e,
        sort: random()
    })).sort((e, d) => e.sort - d.sort).map(({value: e}) => e),
    noLoop(),
    drawS()
       
    }
}

function drawIsometricBoxTC(x, y, z, unit_width, unit_height,length,width,height) {
    fill(colors[1]);
    push();
    let canvas_coords = coordToPixels(x, y, z, unit_width, unit_height);
    translate(canvas_coords[0], canvas_coords[1]);
    quad(
      0,
      0,
      -unit_width*length*cos(30),unit_width*length*sin(30),
          unit_width*(width - length)*cos(30),unit_width*(width+length)*sin(30),
           unit_width*width*cos(30),unit_width*width*sin(30)
    );
      
    fill(colors[2]);
    quad(
      -unit_width*length*cos(30),unit_width*length*sin(30),
          -unit_width*length*cos(30),unit_width*length*sin(30)+unit_height*height,
          unit_width*(width - length)*cos(30),unit_width*(width+length)*sin(30)+unit_height*height,
          unit_width*(width - length)*cos(30),unit_width*(width+length)*sin(30),
    );
      
    fill(colors[3]);
    quad(
      unit_width*(width - length)*cos(30),unit_width*(width+length)*sin(30)+unit_height*height,
          unit_width*(width - length)*cos(30),unit_width*(width+length)*sin(30),
          unit_width*width*cos(30),unit_width*width*sin(30), 
          unit_width*width*cos(30),unit_width*width*sin(30)+unit_height*height, 
    );
    
    pop();
      
  }
  
  function drawIsometricBoxBC(context,origin_x, origin_y, x, y, z, unit_width, unit_height,length,width,height,colors) {

    if(!colorPage){
        context.noStroke()
        
    }
    else{
        context.stroke(0)
        context.strokeWeight(COLOR_PAGE_WEIGHT)
        context.strokeCap(SQUARE)
    }
    
    context.fill(colors[0]);
    
    let canvas_coords = coordToPixels(origin_x, origin_y,x, y, z, unit_width, unit_height,true);
    context.push();
    context.translate(canvas_coords[0], canvas_coords[1]);
    
    context.quad(
      0,-unit_width*height,
      width*unit_width*cos(30),-width*unit_width*sin(30)-height*unit_height,
      (width - length)*unit_width*cos(30),-unit_width*sin(30)*(width + length) - height*unit_height,
      -length*unit_width*cos(30),-length*unit_width*sin(30) - height*unit_height
    );
      
    context.fill(colors[1]);
    context.quad(
      0,0,
      -length*unit_width*cos(30),-length*unit_width*sin(30),
      -length*unit_width*cos(30),-length*unit_width*sin(30) - height*unit_height,
      0,-height*unit_height
    );
      
    context.fill(colors[2]);
    context.quad(
      0,0,
      0,-height*unit_height,
      width*unit_width*cos(30),-width*unit_width*sin(30)-height*unit_height,
      width*unit_width*cos(30),-width*unit_width*sin(30)
    );
    
    context.pop();
      
  }
  
  function coordToPixels(origin_x,origin_y,x, y, z, unit_width, unit_height,bottomZero) {
    if(bottomZero){
       let x_canvas = origin_x + (y-x)*cos(30)*unit_width;
    let y_canvas = origin_y - (x + y) * unit_height*sin(30) - z * unit_height;
   
    return [x_canvas, y_canvas];
    }
    else{
       let x_canvas = width / 2 + (y-x)*cos(30)*unit_width;
    let y_canvas = 0*height + (x + y) * unit_height*sin(30) + z * unit_height;
    return [x_canvas, y_canvas];
    }
   
  }
  
  function getRandomColors(coolors){
    let colors_output =[]
    coolors_copy = coolors.slice()
    let index_1 = round(random(0,coolors_copy.length-1))
    colors_output.push(coolors_copy[index_1].rgb)
    coolors_copy.splice(index_1,1)
    let index_2 = round(random(0,coolors_copy.length-1))
    colors_output.push(coolors_copy[index_2].rgb)
    coolors_copy.splice(index_2,1)
    let index_3 = round(random(0,coolors_copy.length-1))
    colors_output.push(coolors_copy[index_3].rgb)
    coolors_copy.splice(index_3,1)
    let index_4 = round(random(0,coolors_copy.length-1))
    colors_output.push(coolors_copy[index_4].rgb)
    coolors_copy.splice(index_4,1)
   
    return colors_output
    
  }
    
  function drawStackWithWalls(){
      
          drawIsometricBox(0, 0, 8.0, LAYER_WIDTH, LAYER_HEIGHT,8,8,0.1);
    drawIsometricBox(0, 0, 0, LAYER_WIDTH, LAYER_HEIGHT,8,0.1,8);
      drawIsometricBox(0, 0.1, 0, LAYER_WIDTH, LAYER_HEIGHT,0.1,8,8);
      for(var i = 0;i<NUM_CUBES_X;i++){
          for(var j = 0;j<NUM_CUBES_Y;j++){	
              for(var k = 7;k>3;k--){
              drawIsometricBox(i,j,k+0.1,LAYER_WIDTH,LAYER_HEIGHT,k-4,k-4,1)
              }
          }
      }
    
   
    }

    function drawSlottedTower(context,x,y,NUM_CUBES_X,NUM_CUBES_Y,NUM_LAYERS,LAYER_WIDTH,LAYER_HEIGHT,colors){

        if(colorPage){
            colors[0] = color(255)
            colors[1] = color(255)
            colors[2] = color(255)
            context.stroke(0)
            context.strokeWeight(COLOR_PAGE_WEIGHT)
        }
       
        
        var box_width;
    var box_height;
    
    for(var i = NUM_CUBES_X;i>0;i--){
      for(var j = NUM_CUBES_Y;j>0;j--){
        var stack_height = round(random(3,NUM_LAYERS+3));
        //var stack_height = NUM_LAYERS

        for(var k = 0;k<stack_height*i*j*0.006;k++){
          if(i==NUM_CUBES_X | j == NUM_CUBES_Y){
            var box_width = (random(0,1)>0.8)?0.5:1.0;
        var box_length = (random(0,1)>0.8)?0.5:1.0;  
          }
          else{
            var box_width = (random(0,1)>0.2)?0.5:1.0;
        var box_length = (random(0,1)>0.2)?0.5:1.0; 
          }
          //function drawIsometricBoxBC(context,origin_x, origin_y, x, y, z, unit_width, unit_height,length,width,height,colors) {
          //drawIsometricBoxBC(pg,d+0.866*edgey,g+0.89*edgex,0,0,0,edgey,edgex,1,1,0.6,[color(255,0,0),color(0,255,0),color(0,0,255),color(0,0,0)])
         drawIsometricBoxBC(context,x,y,i,j,k,LAYER_WIDTH,LAYER_HEIGHT,box_length,box_width,1.0,colors)
      
              }   
           
      
        context.push()
        holeColor = color(colors[1])
        colorPage?context.stroke(0):context.noStroke()
        colorPage?context.noFill():context.fill(holeColor)
        let canvas_coords = coordToPixels(x, y,i+0.5*box_length, j+0.5*box_width, k, LAYER_WIDTH, LAYER_HEIGHT,true);
        context.translate(canvas_coords[0], canvas_coords[1]);
        context.ellipse(0,0,0.5*box_width*LAYER_WIDTH,0.25*box_width*LAYER_WIDTH)
        context.pop()

      }
    }
    }
    function drawSlottedTowers(seed,withColors){
        randomSeed(seed); 
        console.log("drawing towers")
        if(withColors){
            for (var i = 0;i<=colorIndex;i++){
                coolors = random(coolorsCollection)
            }
            
        }
        else{
            coolors = random(coolorsCollection)
            coolors = blank
        }
        randomSeed(seed); 
      colors = getRandomColors(coolors)
    
    //background(colors[3]);
      //noStroke()
      /*
      var circleColor = color(colors[0])
      circleColor.setAlpha(150)
      fill(circleColor)
      circle(width/2,height/2,0.9*height)
      circleColor = color(colors[1])
      circleColor.setAlpha(75)
      fill(circleColor)
      circle(width/2,height/2,0.8*height)
       drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 0;
      drawingContext.shadowColor = "black";
      let prob = 0.0;
      
    */
    var box_width;
    var box_height;
    for(var x = NUM_CUBES_X;x>0;x--){
      for(var y = NUM_CUBES_Y;y>0;y--){
        var stack_height = round(random(3,NUM_LAYERS+3));
        for(var k = 0;k<stack_height*x*0.09;k++){
          if(x==NUM_CUBES_X | y == NUM_CUBES_Y){
            var box_width = (random(0,1)>0.2)?0.5:1.0;
        var box_length = (random(0,1)>0.2)?0.5:1.0;  
          }
          else{
            var box_width = (random(0,1)>0.5)?0.5:1.0;
        var box_length = (random(0,1)>0.5)?0.5:1.0; 
          }
         drawIsometricBoxBC(x,y,k,LAYER_WIDTH,LAYER_HEIGHT,box_length,box_width,1)
      
              }   
           
      
       push();
        holeColor = color(colors[3])
        holeColor.setAlpha(180)
                  fill(holeColor);
                  let canvas_coords = coordToPixels(x+0.5*box_length, y+0.5*box_width, k, LAYER_WIDTH, LAYER_HEIGHT,true);
               translate(canvas_coords[0], canvas_coords[1]);
          
               ellipse(0,0,0.5*box_width*LAYER_WIDTH,0.25*box_width*LAYER_WIDTH)
                  pop()
           
      
      }
      
    }
    fxpreview()
    }
    
    function drawTesseractTower(){

    }