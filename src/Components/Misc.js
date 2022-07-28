import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from 'react-grid-gallery';

function Misc() {
    const IMAGES =
[{
        src: "https://i.ibb.co/8c0XP0H/IMG-0023.jpg",
        thumbnail: "https://i.ibb.co/8c0XP0H/IMG-0023.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Almaden Floor"
},
{
    src: "https://i.ibb.co/crDL5Mr/IMG-2669.jpg",
    thumbnail: "https://i.ibb.co/crDL5Mr/IMG-2669.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Almaden Trail"
},
{
    src: "https://i.ibb.co/nRCcykn/IMG-2684.jpg",
    thumbnail: "https://i.ibb.co/nRCcykn/IMG-2684.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Almaden Trail Peak"
},
{
    src: "https://i.ibb.co/T8T8zjm/IMG-2686.jpg",
    thumbnail: "https://i.ibb.co/T8T8zjm/IMG-2686.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Almaden Trail Skyline"
},
{
    src: "https://i.ibb.co/R3LtwxQ/IMG-2672.jpg",
    thumbnail: "https://i.ibb.co/R3LtwxQ/IMG-2672.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
        src: "https://i.ibb.co/HTMndc9/IMG-2673.jpg",
        thumbnail: "https://i.ibb.co/HTMndc9/IMG-2673.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Almaden Trail"
},

{
        src: "https://i.ibb.co/rQkSRmG/IMG-2682.jpg",
        thumbnail: "https://i.ibb.co/rQkSRmG/IMG-2682.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: "https://i.ibb.co/CVfm9jd/IMG-4214.jpg",
    thumbnail: "https://i.ibb.co/CVfm9jd/IMG-4214.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Hayward Loop Trail Creek"
},
{
    src: "https://i.ibb.co/C1y1PWB/IMG-4216.jpg",
    thumbnail: "https://i.ibb.co/C1y1PWB/IMG-4216.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Hayward Loop Trail"
},
{
    src: "https://i.ibb.co/K5yH53G/IMG-4219.jpg",
    thumbnail: "https://i.ibb.co/K5yH53G/IMG-4219.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "https://i.ibb.co/X8qjT47/IMG-4222.jpg",
    thumbnail: "https://i.ibb.co/X8qjT47/IMG-4222.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Hayward Loop Trail Skyline"
},
{
    src: "https://i.ibb.co/cCmbBQb/IMG-2251.jpg",
    thumbnail: "https://i.ibb.co/cCmbBQb/IMG-2251.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Lands End Cove"
},
{
    src: "https://i.ibb.co/NxWVw1h/IMG-2254.jpg",
    thumbnail: "https://i.ibb.co/NxWVw1h/IMG-2254.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "https://i.ibb.co/hmNMP7L/IMG-2264.jpg",
    thumbnail: "https://i.ibb.co/hmNMP7L/IMG-2264.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "The magical ocean"
},
{
    src: "https://i.ibb.co/Jq5vgr3/IMG-2257.jpg",
    thumbnail: "https://i.ibb.co/Jq5vgr3/IMG-2257.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "The magical ocean"
},
{
    src: "https://i.ibb.co/tJGtP6g/IMG-2266.jpg",
    thumbnail: "https://i.ibb.co/tJGtP6g/IMG-2266.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Lands End"
},
{
    src: "https://i.ibb.co/Jq5vgr3/IMG-2257.jpg",
    thumbnail: "https://i.ibb.co/Jq5vgr3/IMG-2257.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "The magical ocean"
},
{
    src: "https://i.ibb.co/BfGLXRW/IMG-2267.jpg",
    thumbnail: "https://i.ibb.co/BfGLXRW/IMG-2267.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "https://i.ibb.co/ystwxnh/IMG-2270.jpg" ,
    thumbnail: "https://i.ibb.co/ystwxnh/IMG-2270.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Lands End SF Bridge"
},
{
    src: "https://i.ibb.co/Dp0kfx9/IMG-1998.jpg",
    thumbnail: "https://i.ibb.co/Dp0kfx9/IMG-1998.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods Cove Trail"
},
{
    src: "https://i.ibb.co/VMkwz56/IMG-2109.jpg",
    thumbnail: "https://i.ibb.co/VMkwz56/IMG-2109.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Diablo Valley Trail"
},
{
    src: "https://i.ibb.co/K5p5Rs0/IMG-2279.jpg" ,
    thumbnail: "https://i.ibb.co/K5p5Rs0/IMG-2279.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Lands End Trail"
},
{
    src: "https://i.ibb.co/Vxp0zCV/IMG-2122.jpg",
    thumbnail: "https://i.ibb.co/Vxp0zCV/IMG-2122.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "https://i.ibb.co/FDLDp7Z/IMG-2128.jpg",
    thumbnail: "https://i.ibb.co/FDLDp7Z/IMG-2128.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Diablo Valley Mid-Peak"
},
{
    src: "https://i.ibb.co/FKkLQKG/IMG-2134.jpg",
    thumbnail: "https://i.ibb.co/FKkLQKG/IMG-2134.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Diablo Valley Mid-Peak"
},
{
    src: "https://i.ibb.co/QbvJf23/IMG-2142.jpg",
    thumbnail: "https://i.ibb.co/QbvJf23/IMG-2142.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Diablo Valley Peak"
},
{
    src: "https://i.ibb.co/wRypr6M/IMG-3287.jpg",
    thumbnail: "https://i.ibb.co/wRypr6M/IMG-3287.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Diablo Valley Bottom"
},
{
    src: "https://i.ibb.co/sQb8gJZ/IMG-4329.jpg",
    thumbnail: "https://i.ibb.co/sQb8gJZ/IMG-4329.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Point Lobos"
},
{
    src: "https://i.ibb.co/3cZknD3/IMG-4331.jpg",
    thumbnail: "https://i.ibb.co/3cZknD3/IMG-4331.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Point Lobos"
},
{
    src: "https://i.ibb.co/yQLyPH9/IMG-2492.jpg",
    thumbnail: "https://i.ibb.co/yQLyPH9/IMG-2492.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Sausalito Peak"
},
{
    src: "https://i.ibb.co/ZhF2jgr/IMG-1996.jpg",
    thumbnail: "https://i.ibb.co/ZhF2jgr/IMG-1996.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods Cove"
},
{
    src: "https://i.ibb.co/4djW5Nz/IMG-1997.jpg",
    thumbnail: "https://i.ibb.co/4djW5Nz/IMG-1997.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "https://i.ibb.co/dkRnnP1/IMG-2632.jpg",
    thumbnail: "https://i.ibb.co/dkRnnP1/IMG-2632.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods Treetop"
},
{
    src: "https://i.ibb.co/8zYRmft/IMG-2645.jpg",
    thumbnail: "https://i.ibb.co/8zYRmft/IMG-2645.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods"
},
{
    src: "https://i.ibb.co/ZXxQn0X/IMG-0108.jpg",
    thumbnail: "https://i.ibb.co/ZXxQn0X/IMG-0108.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "https://i.ibb.co/cLHVLPd/IMG-0112.jpg",
    thumbnail: "https://i.ibb.co/cLHVLPd/IMG-0112.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods "
},
{
    src: "https://i.ibb.co/Xp3f6yB/IMG-0126.jpg",
    thumbnail: "https://i.ibb.co/Xp3f6yB/IMG-0126.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods "
},
{
    src: "https://i.ibb.co/6YZVDJg/IMG-0114.jpg",
    thumbnail: "https://i.ibb.co/6YZVDJg/IMG-0114.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods "
},
{
    src: "https://i.ibb.co/LdJnkQG/IMG-0654.jpg",
    thumbnail: "https://i.ibb.co/LdJnkQG/IMG-0654.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Muir Woods"
},
{
    src: "https://i.ibb.co/f8NWDTL/IMG-1957.jpg",
    thumbnail: "https://i.ibb.co/f8NWDTL/IMG-1957.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Stinson Beach"
}
]

    return (
        <Container fluid className="misc-section">
            <Container>
                <h1 style={{paddingBottom: 30}}> Personal Favorite<b> Hikes </b></h1>
                <Gallery images={IMAGES}/>
            </Container>       
        </Container>
    );
};

export default Misc;