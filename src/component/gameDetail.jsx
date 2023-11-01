import { CaretRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../fakedata";

const GameDetail = () => {
    const [data, setData] = useState()
    const gameList = fakeData

    const { id } = useParams();

    const gameId = parseInt(id, 10);

    useEffect(() => {
        const game = gameList.find((item) => item.id === gameId);
        if (game) {
            setData(game);
        }
    }, [id]);





    return (
        <div style={{ margin: '40px' }}>
            {data && (
                <div style={{ width: '100%', display: 'flex', textAlign: 'center' }} >
                    <div style={{ width: '50%' }}  >

                        <Image
                            src={data.image} alt={data.name} width={500} height={500} />
                    </div>

                    <div style={{ width: "50%", maxHeight: "600px", }}>
                        <div style={{ fontSize: '40px' }}>{data.name}</div>
                        <div style={{ textAlign: 'justify', lineHeight: "1.5", margin: "20px", }}>
                            <div style={{ textAlign: 'justify', lineHeight: "1.5", fontSize: "15px", maxHeight: "400px", overflow: "auto" }}>
                                <div>1. Mục Tiêu:
                                    <div>{data.target}</div>
                                </div>
                                <div>2. Phím Bấm:
                                    <ul style={{ listStyleType: "none" }}>
                                        {data.key.split("\n").map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>3. Cách Chơi:
                                    <ul style={{ listStyleType: "none" }}>
                                        {data.how.split("\n").map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <a href={data.link} target="blank"><Button style={{ width: '300px', height: "50px", textAlign: 'center' }} type="primary" danger> <PlayCircleOutlined /> Play</Button></a>

                    </div>
                </div>
            )}
        </div>
    );
};

export default GameDetail