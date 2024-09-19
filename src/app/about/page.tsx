'use client'
import Header from "../components/header";
import TitleBar from "../components/titlebar";
import Users from "../loadData/page";
// import User from "../user/page";
// import Users from "../rendering/User-CSR/page";

export default function About() {
    return (
        <>
            <TitleBar title="About" />
            <Header></Header>
            <section className="About-Info">
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur, odit fugiat neque libero reiciendis exercitationem suscipit nesciunt facilis ut enim minima eaque maxime id iure consequuntur iusto et quisquam.
                    Quidem facere atque dolores perferendis, ab officia, porro in possimus enim expedita inventore dolorem aut eaque ipsa doloremque vero odit veniam commodi explicabo tempore incidunt totam itaque! Et, excepturi odit!
                    Atque sapiente debitis inventore fuga veniam, quam quia neque accusamus? Quis, dolorum? Nobis reiciendis blanditiis animi magnam recusandae exercitationem rem, in ratione placeat labore. Ipsam nobis eius beatae recusandae expedita?
                    Dignissimos tenetur nulla possimus! Vero necessitatibus quasi quam temporibus cum quaerat accusamus sunt explicabo sit distinctio, reprehenderit in veniam iusto! Laborum sint nemo ipsum repellat? Assumenda perspiciatis doloribus accusamus quo.
                    Rerum voluptate expedita quos reprehenderit facilis nihil voluptas impedit iure ea? Alias adipisci culpa blanditiis magni in! Obcaecati, quod natus. Mollitia voluptatum quae molestiae, amet quasi minus veniam eius at?</p>
            </section>

            <section>
                <Users></Users>
            </section>
        </>
    )
}