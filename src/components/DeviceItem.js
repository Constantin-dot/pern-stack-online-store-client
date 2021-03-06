import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE, REACT_APP_API_URL } from "../utils/consts";
import littleStar from "../assets/littleStar.png";

const DeviceItem = observer(({ device }) => {
    const history = useHistory();

    return (
        <Col
            md={3}
            className="mt-3"
            onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
        >
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
                <Image
                    width={150}
                    height={150}
                    src={REACT_APP_API_URL + device.img}
                />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    {/* <div>
                        `${type.name} ${brand.name}`
                    </div> */}

                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={littleStar} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
});

export default DeviceItem;
