import { Card, Layout } from "antd";
import Meta from "antd/es/card/Meta";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
import fakeData from "../fakedata";

const MainPage = () => {
  const rowStyle = {
    marginLeft: '5%',
    display: 'flex',
    with: '100%',
    flexWrap: 'wrap',  // Điều này sẽ đảm bảo rằng sản phẩm tự động xuống dòng khi cần
  };


  const productData = fakeData()
  return (
    <div>

      <Content style={{ padding: '20px' }}>

        <div>

          <div style={rowStyle}>
            {productData.map((product) => (
              <Link to={`/${product.id}`}> <Card
                key={product.id}
                hoverable
                style={{
                  width: 240,
                  marginTop: 20,
                  marginLeft: 30

                }}
                cover={<img alt="example" src={product.image} height={250} />}
              >
                <Meta title={product.name} />
              </Card></Link>

            ))}
          </div>
        </div>
      </Content>

    </div>
  );
}

export default MainPage