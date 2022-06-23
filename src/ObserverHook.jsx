import React from 'react';
import useScrollFadeIn from './useScrollFadeIn'
import "./all.css"

const exampleItems = [
    {
        title: 'EXAMPLE 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim risus, consectetur nec risus quis, auctor vulputate sem.'
    },
    {
        title: 'EXAMPLE 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim risus, consectetur nec risus quis, auctor vulputate sem.'
    },
    {
        title: 'EXAMPLE 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim risus, consectetur nec risus quis, auctor vulputate sem.'
    },
];

const ObserverHook = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3),
    };

    return (
        <>
            <section className="example-section">
                <div className="section-1-wrapper">
                    <div className="trash">
                        지나가세요~
                    </div>
                </div>
            </section>
            <section className="example-section-2">
                <div className="section-2-wrapper">
                    <div className="section-2-title">Intersection Observer</div>
                    <div className="section-2-subtitle">scroll animation</div>
                    <ul className="map-ul">
                        {exampleItems.map((item, index)=>(
                            <li key={item.title} {...animatedItem[index]}>
                                <div className="example-list-title">{item.title}</div>
                                <div className="example-list-description">{item.description}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ObserverHook;