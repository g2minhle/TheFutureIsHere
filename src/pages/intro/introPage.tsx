import * as React from "react";
import * as img1 from "../../assets/cat.png";
import * as pdf from "../../assets/HoangMinhLe_Resume.pdf";

export class IntroPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log(img1)
    }

    public render() {

        return (
            <div className="container-fuild">
                Intro page
                <a href="/info">click </a>
                <img src={img1}/>
                <a href={pdf}>resume</a>
            </div>
        );
    }
}
