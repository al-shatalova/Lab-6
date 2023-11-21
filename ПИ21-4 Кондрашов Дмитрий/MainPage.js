import './MainPage.js';
import {Link} from "react-router-dom";
import React, {useState} from "react";


// компонент grid столбик
function GridObject({image, text}) {
    return (
        <>
            <img src={image} alt="image"></img>
            <p className={"text"}>{text}</p>
            <div>
                <Link to={`/product/${image.charAt(image.length - 5) - 4}`}>
                    <input className={'item-page'}></input>
                </Link>
            </div>
        </>
    )
}
// компонент кнопки с хуками
function Button({id, image, text, text2}) {
    // использование хука (переменная, которая меняется и функция, которая меняет
    const [showComponent, setShowComponent] = useState(false);
    // функция, которая вызывается в компоненте, она меняет его состояние
    const OnToggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return (
        <>
            <button id={id} onClick={OnToggleComponent}>
                {showComponent ? <div id={id}><GridObject image={image} text={text}></GridObject></div>
                    : <div id={id}><GridObject image={image} text={text2}></GridObject></div>}
            </button>
        </>
    )
}
// компонент grid столбик
function GridGenerator({array}) {
    // стрелочная функция по списку с использованием реквизитов
    return array.map((item) => (
        <Button id={item.gridid} image={item.imgSrc}
                text={item.text} text2={item.text2} link={item.link}></Button>
    ));
}

const grid1 = [
    {
        id: 1,
        gridid: 'item-0',
        imgSrc: 'image_4.png',
        text: 'Подарочная игрушка Fancy Капибара Дракула 903 руб',
        text2: 'Подарочная игрушка Fancy Капибара Дракула',
        link: 'https://market.yandex.ru/product--igrushka-miagkaia-kapibara-drakula-19-sm-tsvet-korichnevyi-chernyi-krasnyi-fancy-kapid0/1941503690?sku=102417677120&showUid=17005624522322296348306001&cpc=mHEc23tILHmX9n3EQ6zod-FlgYVUdeFoapHBl392xxzNWrdeaOsTRIJmd7ryc5u9rvgtCib5CKbMkfIJL0L5wW2k4H17imTJ7jrD9JrvmqQluHgE0xv1ClUt4fJ5otfd7SG7ewXpQ4q3KORu47sdYxPHrx-tZPiERlhoIoMj1CldLh0JGjZNlrTTZcjrqwKRJXLj5m--DotpMmATK3TpCg%2C%2C&cpa=1&do-waremd5=o-EqahEGBry08NYxOfIqHQ&_redirectCount=1'
    },
    {
        id: 2,
        gridid: 'item-1',
        imgSrc: 'image_5.png',
        text: 'Мягкая игрушка Акула 521 руб',
        text2: 'Мягкая игрушка Акула',
        link: 'https://market.yandex.ru/product--miagkaia-igrushka-angeltoys-akula/1473839450?sku=101572490729&showUid=17005624552942720250006006&cpc=__LdmopgPduirwqwI-lXoCZZOeszYwT0Q4hifD7rWfEnzb2Z3rwxkGI2vWIu7TfnHRPJuslQ798UHkLr3dq_0vw5Hk3SlLWb3m4-FT7l_C2UYwvnFKh2U6vJFC18UzM2AEtT-VBZbsckM8LZ0hW8mEa45HYDuQImIFY3RAb47U5rEexUnnhhiUD1UEfcs3tt7NJdVDMdtCd-2VeTzdPAwA%2C%2C&cpa=1&do-waremd5=1NHFPj9QGVDdg23EDGmhJQ&_redirectCount=1'
    },
    {
        id: 3,
        gridid: 'item-2',
        imgSrc: 'image_6.png',
        text: 'Мягкая игрушка Тюлень 1130 руб',
        text2: 'Мягкая игрушка Тюлень',
        link: 'https://market.yandex.ru/product--miagkaia-igrushka-tiulen-65-sm/1806282855?sku=101899314769&showUid=17005624553283138369106002&cpc=__LdmopgPdu_qjI_TAWODtVgWQIGXXiwPZUNY7TNqF5XbTHfxZ3BoBP4iNmIPTQ6gBFnUIOl_VJYfH0eotTNWHyf5RVX6Xxe9kFs5hvUuMCtf11CBQXI2ACRmkPJ0Vhto-3WlNcjvdLc8lQNQRFk37CQBEZgn7J_ND314OPqYMSil3KgghHtbRaqhQv4PeSjEg7vSIaOYcrrvtqAs90Jnw%2C%2C&cpa=1&do-waremd5=_eYqXsIPLbLNywCcdkuLBA&_redirectCount=1'
    }
];

const grid2 = [
    {
        id: 4,
        gridid: 'item-0',
        imgSrc: 'image_7.png',
        text: 'Мягкая игрушка милый Кот-акула 429 руб',
        text2: 'Мягкая игрушка милый Кот-акула',
        link: 'https://market.yandex.ru/product--kot-akula/1910315453?sku=102213635053&showUid=17005624553713842757306003&cpc=__LdmopgPduF4KVKreowTKPw66Ndv5S3qyrJ-RKHy2gLTP0HJqprLN6dtel7HP9Pp0ZR27TI8VJk3NJEwRyG84TsbCoaOFdDQQy5cCDZN48L_IiuPFCjLtsX_4NAk4wqwzunvzyGpA-i00I-0m2DuaTFJnAvK6wZsGh2eNOJT1xSyobdT491kHxs_XJI8wmVZBIjw8FLEVZJQ1QeCmAVaA%2C%2C&cpa=1&do-waremd5=2O6iHHNL1a_kf8RyOgCY3w&_redirectCount=1'
    },
    {
        id: 5,
        gridid: 'item-1',
        imgSrc: 'image_8.png',
        text: 'Мягкая игрушка собака Грю (Кайл) 1671 руб',
        text2: 'Мягкая игрушка собака Грю (Кайл)',
        link: 'https://market.yandex.ru/product--miagkaia-igrushka-sobaka-griu-kail/995592566?sku=101365315555&showUid=17005624552792521790706005&cpc=__LdmopgPdsyeq_tm4MwHkWc048osNS2fGuHxTYwVB-_wsAfsr5KXTb-PrOMs1QPadUHOdMxxtpPCnHv3WlD-6__Fkq3Kf0mCuO7wd_gQsuc3C-BpPsBzQCpNVEzYqfS0wCGjPGaPz4TTjXGvme83PWxQ8NTEzGbZ090I03zpWiLVH5kjLJFJPNqPPi0ijQxfU-CDku9finhe8eGlX9XPw%2C%2C&cpa=1&do-waremd5=thwtwmUfiiXt-AnEDyd8Cg&_redirectCount=1'
    },
    {
        id: 6,
        gridid: 'item-2',
        imgSrc: 'image_9.png',
        text: 'Мягкая игрушка Кот пушистик белый 807 руб',
        text2: 'Мягкая игрушка Кот пушистик белый',
        link: 'https://market.yandex.ru/product--miagkaia-igrushka-kot-pushistik-belyi-30-sm-kot-beliash/1657515410?sku=101572213116&showUid=17005624553002785655806008&cpc=__LdmopgPdtkz7Vmaoeu5xnRToJCQT3TWRbJM0dRWIqqhcVgv5uwkzZUGx0KqRZA589mbfj_9AJLgFY56He2QQm802yKJW-7z4_g47EnafZRrCncY8WARG6TnBoX3jtqZR5rOL4OfMM13Pjia_kPkSbicFpjcT7uCr3BemQxSUiNLLT9Zfn4UaIjuSJtF2vryGyLWzdVsOT8DYy3NY0HJA%2C%2C&cpa=1&do-waremd5=u-sn7iiVCh3-2BQC9f2X3A&_redirectCount=1'
    }
];

function MainPage() {
    return (
        <>
            <div className="angry-grid">
                <GridGenerator array={grid1}></GridGenerator>
            </div>
            <div className="angry-grid">
                <GridGenerator array={grid2}></GridGenerator>
            </div>
        </>
    );
}

export default MainPage;