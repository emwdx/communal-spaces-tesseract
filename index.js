
let pg,
    paletten,
    seed,
    //dimW = 2400,
    //dimH = 3396;
    dimW = 2400,
    dimH = 2400;
//seed = 545858

NUM_CUBES_X = 13;
NUM_CUBES_Y = 13;
const COLOR_PAGE_WEIGHT = 1.0;
var NUM_LAYERS;
var LAYER_WIDTH;
var LAYER_HEIGHT;
var colors;
var colorPage = false;
function draw(){

     seedRandomness();
     seed = 1e6 * randomM0()
     randomSeed(seed),

     pg.strokeCap(SQUARE);
 paletten = int(randomM2()*(colorScheme.length)),
     //paletten = 11,
     palette = colorScheme[paletten],
     shuffledPalette = [...palette].map(e => ({
         value: e,
         sort: randomM4()
     })).sort((e, d) => e.sort - d.sort).map(({ value: e }) => e),
     noLoop(),
     drawS(),
     triggerPreview();
}
function windowResized() {


    seedRandomness();
    seed = 1e6 * randomM0();
        randomSeed(seed)
        createCanvas(window.innerHeight, window.innerHeight),
        pg = createGraphics(2400, 2400),
        pg.strokeCap(SQUARE);
        paletten = int(randomM2()*(colorScheme.length)),

        palette = colorScheme[paletten],
        shuffledPalette = [...palette].map(e => ({
            value: e,
            sort: randomM4()
        })).sort((e, d) => e.sort - d.sort).map(({ value: e }) => e),
        noLoop(),
        drawS(),
        triggerPreview();
}
function m_col(e) {
    let d = e.lastIndexOf("/"),
        g = e.slice(d + 1).split("-");
    for (let e = 0; e < g.length; e++)
        g[e] = "#" + g[e];
    return g
}

const colorScheme = [m_col("3b4855-5885a4-81bcf3-b2e6ff-8ba18f-cabdb1-ffc100"), 
m_col("281c10-6f534e-878a87-ff354b-aab679"), 
m_col("d1e3dd-c3d4cf-f3cbbf-c79f90-3f5065-6cadfb-4a515e"),
m_col("ea1714-8c0000-f1d8bd-e7a16f-313a28-b8baa2-b3dce0"),
m_col("ddc4a9-85bce5-81bce5-2f76c7-2d76cf-ff5635-2d74c5-fb1800"),
m_col("f8f4eb-d9d0bc-5da5e6-e4c05f-0c5fb6-00428f-00408d-13120c"),
m_col("274363-5482ca-7d9ad7-8fd3fd-c3f0ff-000500"),
m_col("f8f4eb-f5f4e9-f4f4e9-f3f2e7-e7eae7-d3d3ca-d2d2c9-d9d0bc-5da5e6-dcb857-e4c05f-cea746-0c5fb6-71695e-00428f-00408d-5a4943-cdcdc4-13120c-ddc4a9-d8bfa4-85bce5-81bce5-81b6db-2f76c7-2d76cf-ff5635-ff381c-2d74c5-d40000-fb1800-650000-540000-311814-240a06"),
m_col("b1b0ae-4f5d59-3a8b89-ff4835-af0000-0e262e-009a9e-2f3a4e"),
m_col("0e121c-958e7d-28324a-fe4300-edd383"),
m_col("6f7b71-0d0e0f-ffb38c-ff9873-33668c-5b9cc7-5e020c"),
m_col("1a2c75-70093b-ebca38-1c210b-babebd-d7ae77"),
m_col("1f3f6d-dd4400-ffad21-9cb7c9-ccbda6"),
m_col("241e18-454e59-d67054-d6b887-bda794-e6dcc4-5d6166"),
]

const schemeNames = ["mogoito_beach","regaleira_spiral","sintra_square","lunch_date","sand_sky_sun","seaside_town","castle_wall_sky","maximalism","penguin_paddock","mondrian_tableau","setubal_harbor","painted_wall","sintra_sunset","sintra_palace_kitchen"]
    let palette,
    mosaicFreq,
    edgex,
    edgey,
    edge,
    cubeInRow,
    cubeType,
    border = 50,
    innerMargin = 300,
    edgexList = [1490, 744, 496, 373],
    edgeyList = [860, 430, 282, 215],
    edgeList = [860, 430, 282, 215],
    minCubes = [1, 2, 3, 4],

    maxCubes = [1, 6, 14, 28],
    cutoff = 120,
    ribbonT = "Standard",
    pa = .4,
    edges = [];
var sortedEdges;
let shuffledPalette,
    bg;
function setup() {
    LAYER_WIDTH = 0.03 * windowHeight;
    LAYER_HEIGHT = 0.03 * windowHeight;
    NUM_LAYERS = round(0.75 * height / 10);

    angleMode(DEGREES)
    windowResized()
    //seedRandomness();
}
function drawS() {
    edges = [];
    mosaicFreq = random(.1, .6);
    //pg.noStroke();
    let e = [2, 64, 25, 10],


        d = [];
    for (let g = 0; g < e[0]; g++)
        d.push(1);
    for (let g = 0; g < e[1]; g++)
        d.push(2);
    for (let g = 0; g < e[2]; g++)
        d.push(3);

    for (let g = 0; g < e[3]; g++)
        d.push(3);

    //let g = random(d);
    let g = d[floor(randomM1()*d.length)]
    edgex = edgexList[g - 1],
        edgey = edgeyList[g - 1],
        edge = edgeList[g - 1],
        //pg.background("#fff6e4"),
        
        bg = shuffledPalette[0]
        
    let s = shuffledPalette[1],
        o = bg;
    
        if(!colorPage){
            pg.fill(bg)
        }
        else{
            pg.fill(255)
            pg.stroke(0)
            pg.strokeWeight(COLOR_PAGE_WEIGHT)
        }
        
    colorPage ? pg.fill(255) : pg.fill(bg),
        colorPage ? pg.stroke(255) : pg.noStroke(),
        
     
        pg.rect(border, border, dimW - 2 * border, dimH - 2 * border);
    for (let e = 0; e < 1e4; e++)
        colorPage ? pg.fill(255) : pg.fill(s),
            colorPage ? pg.stroke(0) : pg.noStroke();
            //pg.fill(s),
            //pg.ellipse(random(border, dimW - border), random(border, dimH - border), 1, 1);
    let r = 0,
        t = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3];
    cubeType = "Normal";
    /*random() < .05 && (t = [4], o = shuffledPalette[2], cubeType = "Solid");*/
    let a = dimW / 2 - edgex / 2,
        l = random(-100, 3 * dimH / 4 - border - edgey / 2 - edge),
        i = random([1,2]),
        y = 0;
    if (1 == g)
        l = random(edgey / 2 + border, 3 * dimH / 4 - border - edgey / 2 - edge),
            cubeList(random(t), a, l, o, s),
            r++;
    else if (2 == g) {
        if (1 == i)
            for (let e = 0; e < 50/*was100*/; e += 3)
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


    pg.strokeWeight(COLOR_PAGE_WEIGHT)
    
    if(!colorPage){
        pg.fill(s)
        pg.stroke(o)
    }
    else{
        s = 255;
        o = 0;
        /*
        pg.fill(255)
        pg.stroke(0)
        */
        pg.fill(s)
        pg.stroke(o)
        pg.strokeWeight(COLOR_PAGE_WEIGHT)
    }
    
  

    colorPage ? pg.fill(255) : pg.fill(s);

    //drawSlottedTower(pg,d+0.866*edgey,g+0.89*edgex,NUM_CUBES_X,NUM_CUBES_Y,5,edgey/NUM_CUBES_X,edgex/NUM_CUBES_Y*0.6,[color(214,229,227),color(102,99,112),color(40,0,0),color(240,167,160)])
    let zOffsetBase = 0.2 * edgex / NUM_CUBES_Y * 0.575
    //shuffle(shuffledPalette)
    drawSlottedTower(pg, d + 0.866 * edgey, g + 0.88 * edgex + zOffsetBase, NUM_CUBES_X, NUM_CUBES_Y, 5, edgey / NUM_CUBES_X, edgex / NUM_CUBES_Y * 0.575, [shuffledPalette[2], shuffledPalette[1], shuffledPalette[0]])

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
                    random() < 1.0 && pg.noFill(),
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
                    random() < 0.8/*mosaicFreq*/ && pg.noFill(),
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
                    random() < mosaicFreq && pg.noFill(o),
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
                        random() < mosaicFreq && pg.noFill(o),
                        pg.noFill(),
                        pg.quad(posx, posy, posx + edgex / 10, posy + edgey / 10, posx + edgex / 10, posy + edgey / 10 + edge / 21, posx, posy + edge / 21),
                        pg.fill(s);
            else if (0 == e)
                for (let e = 0; e < 5; e++)
                    posx = d + e * edgex / 10,
                        posy = g + e * edgey / 10,
                        random() < mosaicFreq && pg.noFill(o),
                        /*random() < 0.5 && pg.noFill(),*/
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
                        pg.quad(posx, posy, posx + edgex / 10, posy - edgey / 10, posx + edgex / 10, posy - edgey / 10 + edge / 21, posx, posy + edge / 21)
                        //pg.fill(s);
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
    4 == e && (pg.noFill(s), /*pg.noStroke(),*/ pg.quad(d, g, d + edgex / 2, g - edgey / 2, d + edgex, g, d + edgex / 2, g + edgey / 2), pg.quad(d, g + edge, d + edgex / 2, g + edgey / 2, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge), pg.quad(d, g, d + edgex / 2, g + edgey / 2, d + edgex / 2, g + edgey / 2 + edge, d, g + edge), pg.quad(d + edgex / 2, g + edgey / 2, d + edgex, g, d + edgex, g + edge, d + edgex / 2, g + edgey / 2 + edge))
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

    if (sortedEdges = [...edges].sort(function (e, d) {
        return e[2] - d[2]
    }), 1 == e)
        return cube(edges[0][0], edges[0][1], edges[0][2], edges[0][3], edges[0][4]), s = renderRibbons(e), window.$fxhashFeatures = {
            Palette: schemeNames[paletten],
            "Number of Cubes": g,
            "Number of Ribbons": s,
            "Cube Type": cubeType,
            "Ribbon Type": ribbonT,
            "Zoom Level": e
        },image(pg, 0, 0, window.innerHeight, window.innerHeight) /*image(pg, 0, 0, .706713 * window.innerHeight, window.innerHeight)*/, 0;
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
    for (var r = 0; r < edges.length; r++) {
        d = edges[r][1];
        g = edges[r][2];
        s = edges[r][4];
        let circleColor = color(s)
        circleColor.setAlpha(100)
        colorPage ? pg.fill(255) : pg.fill(circleColor);
        pg.circle(d + 0.5 * edgex, g + 0.5 * edgey, 0.9 * edgey * 2.3)
        circleColor.setAlpha(50)
        colorPage ? pg.fill(255) : pg.fill(circleColor);
        colorPage ? pg.stroke(0) : pg.noStroke();
        pg.circle(d + 0.5 * edgex, g + 0.5 * edgey, 0.866 * edgey * 2.3)

    }
    for (var r = 0; r < edges.length; r++) {
        cube(edges[r][0], edges[r][1], edges[r][2], edges[r][3], edges[r][4]);
    }
    s = renderRibbons(e),
        image(pg, 0, 0, window.innerHeight, window.innerHeight)/*image(pg, 0, 0, .706713 * window.innerHeight, window.innerHeight)*/,
        window.$fxhashFeatures = {
            Palette: schemeNames[paletten],
            "Number of Cubes": g,
            "Number of Ribbons": s,
            "Cube Type": cubeType,
            "Ribbon Type": ribbonT,
            "Zoom Level": e
        }
        console.log(window.$fxhashFeatures)
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
    sortedParams = [...l].sort(function (e, d) {
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
        colorPage ? pg.fill(255) : pg.fill(s);
        colorPage ? pg.stroke(0) : pg.noStroke();
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
        colorPage ? pg.fill(255) : pg.fill(s);
        colorPage ? pg.stroke(0) : pg.noStroke();
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

        if (-1 == i) {
            colorPage ? pg.fill(255) : pg.fill(s);
            colorPage ? pg.stroke(0) : pg.noStroke();
            for (let e = 0; e < 5; e++)
                pg.quad(t + 2 * e * g / 10, r + 2 * e * edgey / 100, t + (2 * e + 1) * g / 10, r + (2 * e + 1) * edgey / 100, t + (2 * e + 1) * g / 10, dimH - border, t + 2 * e * g / 10, dimH - border);
        }
        else if (1 == i) {
            for (let e = 0; e < 5; e++)
                pg.quad(t + 2 * e * g / 10, r - 2 * e * edgey / 100, t + (2 * e + 1) * g / 10, r - (2 * e + 1) * edgey / 100, t + (2 * e + 1) * g / 10, dimH - border, t + 2 * e * g / 10, dimH - border);
        }
        else {
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
        colorPage ? pg.fill(255) : pg.fill(s);
        colorPage ? pg.stroke(0) : pg.noStroke();
        for (let d = 0; d < sortedEdges.length; d++) {
            if (i > sortedEdges[d][1] && i < sortedEdges[d][1] + edgex) {
                if (y = i - sortedEdges[d][1] >= edgex / 2 ? -1 : 1, f == sortedEdges[d][1] && (sortedEdges[d][2] - b) % edgey == 0)
                    continue;
                a = (t = (i - sortedEdges[d][1]) / g) >= 5 ? 5 - (t - 5) % 5 : t % 5,
                    (e = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))])).levels[3] = 242.25,
                    r = color(e.levels[0], e.levels[1], e.levels[2], e.levels[3]),
                    colorPage ? pg.fill(255) : pg.fill(r)
                colorPage ? pg.stroke(0) : pg.noStroke(),
                    //pg.fill(r),
                    0 == n && (-1 == p ? (pg.quad(i, l, i + g, l + edgey / 10, sortedEdges[d][1] + g * (t + 1), sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10, sortedEdges[d][1] + g * t, sortedEdges[d][2] - a * edgey / 10), i = sortedEdges[d][1] + g * (t + 1), l = sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10) : 1 == p ? (pg.quad(i, l, i + g, l - edgey / 10, sortedEdges[d][1] + g * (t + 1), sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10, sortedEdges[d][1] + g * t, sortedEdges[d][2] - a * edgey / 10), i = sortedEdges[d][1] + g * (t + 1), l = sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10) : (pg.quad(i, l, i + g, l, sortedEdges[d][1] + g * (t + 1), sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10, sortedEdges[d][1] + g * t, sortedEdges[d][2] - a * edgey / 10), i = sortedEdges[d][1] + g * (t + 1), l = sortedEdges[d][2] - a * edgey / 10 - y * edgey / 10)),
                    (e = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))])).levels[3] = 242.25,
                    r = color(e.levels[0], e.levels[1], e.levels[2], e.levels[3]),
                    colorPage ? pg.fill(255) : pg.fill(r),
                    colorPage ? pg.stroke(0) : pg.noStroke(),
                    //pg.fill(r),
                    -1 == y ? (pg.quad(i, l, i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t - 4) - g, sortedEdges[d][2] + (5 - a) * edgey / 10, sortedEdges[d][1] + g * (t - 4), sortedEdges[d][2] + (5 - a) * edgey / 10 - y * edgey / 10), random() < .9 && crowds(i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t - 4) - g, sortedEdges[d][2] + (5 - a) * edgey / 10, y, o), i = sortedEdges[d][1] + g * (t - 4) - g, l = sortedEdges[d][2] + (5 - a) * edgey / 10) : 1 == y && (pg.quad(i, l, i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t + 5), sortedEdges[d][2] + (5 - a) * edgey / 10, sortedEdges[d][1] + g * (t + 5) + g, sortedEdges[d][2] + (5 - a) * edgey / 10 - y * edgey / 10), random() < .9 && crowds(i - g, l + y * edgey / 10, sortedEdges[d][1] + g * (t + 5), sortedEdges[d][2] + (5 - a) * edgey / 10, y, o), i = sortedEdges[d][1] + g * (t + 5), l = sortedEdges[d][2] + (5 - a) * edgey / 10),
                    p = y,
                    f = sortedEdges[d][1]
            }
            sortedEdges[d][2] >= b + edge && (n = 0, b = sortedEdges[d][2])
        }
        (e = hexToRgb(shuffledPalette[int(random(1, shuffledPalette.length))])).levels[3] = 242.25,
            r = color(e.levels[0], e.levels[1], e.levels[2], e.levels[3]),
            colorPage ? pg.fill(255) : pg.fill(r);
        colorPage ? pg.stroke(0) : pg.noStroke();
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

    /*
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
    */
}
function keyPressed() {
    if ("s" == key) {
        save(pg, parseInt(seed) + ".png")
    }
    else if ("c" == key) {
        colorPage = !colorPage
        //resizeCanvas(.706713 * window.innerHeight, window.innerHeight),
        seedRandomness();
        seed = 1e6 * randomM0()
            randomSeed(seed),
        //noiseSeed(1e6 * randomM2()),
        //createCanvas(.706713 * window.innerHeight, window.innerHeight),
        //createCanvas(window.innerHeight, window.innerHeight),
        //pg = createGraphics(2400, 2400),
        pg.strokeCap(SQUARE);
        paletten = int(randomM2()*(colorScheme.length)),
        //paletten = 11,
        palette = colorScheme[paletten],
        shuffledPalette = [...palette].map(e => ({
            value: e,
            sort: randomM4()
        })).sort((e, d) => e.sort - d.sort).map(({ value: e }) => e),
        noLoop(),
        drawS(),
        triggerPreview();
           

    }
}

function drawIsometricBoxTC(x, y, z, unit_width, unit_height, length, width, height) {
    fill(colors[1]);
    push();
    let canvas_coords = coordToPixels(x, y, z, unit_width, unit_height);
    translate(canvas_coords[0], canvas_coords[1]);
    quad(
        0,
        0,
        -unit_width * length * cos(30), unit_width * length * sin(30),
        unit_width * (width - length) * cos(30), unit_width * (width + length) * sin(30),
        unit_width * width * cos(30), unit_width * width * sin(30)
    );

    fill(colors[2]);
    quad(
        -unit_width * length * cos(30), unit_width * length * sin(30),
        -unit_width * length * cos(30), unit_width * length * sin(30) + unit_height * height,
        unit_width * (width - length) * cos(30), unit_width * (width + length) * sin(30) + unit_height * height,
        unit_width * (width - length) * cos(30), unit_width * (width + length) * sin(30),
    );

    fill(colors[3]);
    quad(
        unit_width * (width - length) * cos(30), unit_width * (width + length) * sin(30) + unit_height * height,
        unit_width * (width - length) * cos(30), unit_width * (width + length) * sin(30),
        unit_width * width * cos(30), unit_width * width * sin(30),
        unit_width * width * cos(30), unit_width * width * sin(30) + unit_height * height,
    );

    pop();

}

function drawIsometricBoxBC(context, origin_x, origin_y, x, y, z, unit_width, unit_height, length, width, height, colors) {

    if (!colorPage) {
        context.noStroke()

    }
    else {
        context.stroke(0)
        context.strokeWeight(COLOR_PAGE_WEIGHT)
        context.strokeCap(SQUARE)
    }

    context.fill(colors[0]);

    let canvas_coords = coordToPixels(origin_x, origin_y, x, y, z, unit_width, unit_height, true);
    context.push();
    context.translate(canvas_coords[0], canvas_coords[1]);

    context.quad(
        0, -unit_width * height,
        width * unit_width * cos(30), -width * unit_width * sin(30) - height * unit_height,
        (width - length) * unit_width * cos(30), -unit_width * sin(30) * (width + length) - height * unit_height,
        -length * unit_width * cos(30), -length * unit_width * sin(30) - height * unit_height
    );

    context.fill(colors[1]);
    context.quad(
        0, 0,
        -length * unit_width * cos(30), -length * unit_width * sin(30),
        -length * unit_width * cos(30), -length * unit_width * sin(30) - height * unit_height,
        0, -height * unit_height
    );

    context.fill(colors[2]);
    context.quad(
        0, 0,
        0, -height * unit_height,
        width * unit_width * cos(30), -width * unit_width * sin(30) - height * unit_height,
        width * unit_width * cos(30), -width * unit_width * sin(30)
    );

    context.pop();

}

function coordToPixels(origin_x, origin_y, x, y, z, unit_width, unit_height, bottomZero) {
    if (bottomZero) {
        let x_canvas = origin_x + (y - x) * cos(30) * unit_width;
        let y_canvas = origin_y - (x + y) * unit_height * sin(30) - z * unit_height;

        return [x_canvas, y_canvas];
    }
    else {
        let x_canvas = width / 2 + (y - x) * cos(30) * unit_width;
        let y_canvas = 0 * height + (x + y) * unit_height * sin(30) + z * unit_height;
        return [x_canvas, y_canvas];
    }

}

function getRandomColors(coolors) {
    let colors_output = []
    coolors_copy = coolors.slice()
    let index_1 = round(random(0, coolors_copy.length - 1))
    colors_output.push(coolors_copy[index_1].rgb)
    coolors_copy.splice(index_1, 1)
    let index_2 = round(random(0, coolors_copy.length - 1))
    colors_output.push(coolors_copy[index_2].rgb)
    coolors_copy.splice(index_2, 1)
    let index_3 = round(random(0, coolors_copy.length - 1))
    colors_output.push(coolors_copy[index_3].rgb)
    coolors_copy.splice(index_3, 1)
    let index_4 = round(random(0, coolors_copy.length - 1))
    colors_output.push(coolors_copy[index_4].rgb)
    coolors_copy.splice(index_4, 1)

    return colors_output

}

function drawStackWithWalls() {

    drawIsometricBox(0, 0, 8.0, LAYER_WIDTH, LAYER_HEIGHT, 8, 8, 0.1);
    drawIsometricBox(0, 0, 0, LAYER_WIDTH, LAYER_HEIGHT, 8, 0.1, 8);
    drawIsometricBox(0, 0.1, 0, LAYER_WIDTH, LAYER_HEIGHT, 0.1, 8, 8);
    for (var i = 0; i < NUM_CUBES_X; i++) {
        for (var j = 0; j < NUM_CUBES_Y; j++) {
            for (var k = 7; k > 3; k--) {
                drawIsometricBox(i, j, k + 0.1, LAYER_WIDTH, LAYER_HEIGHT, k - 4, k - 4, 1)
            }
        }
    }


}

function drawSlottedTower(context, x, y, NUM_CUBES_X, NUM_CUBES_Y, NUM_LAYERS, LAYER_WIDTH, LAYER_HEIGHT, colors) {

    if (colorPage) {
        colors[0] = color(255)
        colors[1] = color(255)
        colors[2] = color(255)
        context.stroke(0)
        context.strokeWeight(COLOR_PAGE_WEIGHT)
    }


    var box_width;
    var box_height;

    for (var i = NUM_CUBES_X; i > 0; i--) {
        for (var j = NUM_CUBES_Y; j > 0; j--) {
            var stack_height = round(random(3, NUM_LAYERS + 3));
            //var stack_height = NUM_LAYERS

            for (var k = 0; k < stack_height * i * j * 0.006; k++) {
                if (i == NUM_CUBES_X | j == NUM_CUBES_Y) {
                    var box_width = (randomM3() > 0.8) ? 0.5 : 1.0;
                    var box_length = (randomM3() > 0.8) ? 0.5 : 1.0;
                }
                else {
                    var box_width = (randomM3() > 0.2) ? 0.5 : 1.0;
                    var box_length = (randomM3() > 0.2) ? 0.5 : 1.0;
                }
                //function drawIsometricBoxBC(context,origin_x, origin_y, x, y, z, unit_width, unit_height,length,width,height,colors) {
                //drawIsometricBoxBC(pg,d+0.866*edgey,g+0.89*edgex,0,0,0,edgey,edgex,1,1,0.6,[color(255,0,0),color(0,255,0),color(0,0,255),color(0,0,0)])
                drawIsometricBoxBC(context, x, y, i, j, k, LAYER_WIDTH, LAYER_HEIGHT, box_length, box_width, 1.0, colors)

            }


            context.push()
            holeColor = color(colors[1])
            colorPage ? context.stroke(0) : context.noStroke()
            colorPage ? context.noFill() : context.fill(holeColor)
            let canvas_coords = coordToPixels(x, y, i + 0.5 * box_length, j + 0.5 * box_width, k, LAYER_WIDTH, LAYER_HEIGHT, true);
            context.translate(canvas_coords[0], canvas_coords[1]);
            context.ellipse(0, 0, 0.5 * box_width * LAYER_WIDTH, 0.25 * box_width * LAYER_WIDTH)
            context.pop()

        }
    }
}
function drawSlottedTowers(seed, withColors) {
    randomSeed(seed);
    console.log("drawing towers")
    if (withColors) {
        for (var i = 0; i <= colorIndex; i++) {
            coolors = random(coolorsCollection)
        }

    }
    else {
        coolors = random(coolorsCollection)
        coolors = blank
    }
    randomSeed(seed);
    colors = getRandomColors(coolors)

    var box_width;
    var box_height;
    for (var x = NUM_CUBES_X; x > 0; x--) {
        for (var y = NUM_CUBES_Y; y > 0; y--) {
            var stack_height = round(random(3, NUM_LAYERS + 3));
            for (var k = 0; k < stack_height * x * 0.09; k++) {
                if (x == NUM_CUBES_X | y == NUM_CUBES_Y) {
                    var box_width = (random(0, 1) > 0.2) ? 0.5 : 1.0;
                    var box_length = (random(0, 1) > 0.2) ? 0.5 : 1.0;
                }
                else {
                    var box_width = (random(0, 1) > 0.5) ? 0.5 : 1.0;
                    var box_length = (random(0, 1) > 0.5) ? 0.5 : 1.0;
                }
                drawIsometricBoxBC(x, y, k, LAYER_WIDTH, LAYER_HEIGHT, box_length, box_width, 1)

            }


            push();
            holeColor = color(colors[3])
            holeColor.setAlpha(180)
            fill(holeColor);
            let canvas_coords = coordToPixels(x + 0.5 * box_length, y + 0.5 * box_width, k, LAYER_WIDTH, LAYER_HEIGHT, true);
            translate(canvas_coords[0], canvas_coords[1]);

            ellipse(0, 0, 0.5 * box_width * LAYER_WIDTH, 0.25 * box_width * LAYER_WIDTH)
            pop()


        }

    }
    fxpreview()
}

