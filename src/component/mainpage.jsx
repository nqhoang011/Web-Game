import { Card, Layout } from "antd";
import Meta from "antd/es/card/Meta";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  const rowStyle = {
    marginLeft: '5%',
    display: 'flex',
    with: '100%',
    flexWrap: 'wrap',  // Điều này sẽ đảm bảo rằng sản phẩm tự động xuống dòng khi cần
  };


  const productData = [
    // Danh sách các sản phẩm
    {
      id: 1, name: 'Tetris', image: 'https://play-lh.googleusercontent.com/7Zn2QBzByBf4XyQPhuRVsOkSaKSYsty1ka-6_bh6Ub-2kQri6xqqRdK52qxEM69N6cw',
      des: ``
    },
    { id: 2, name: 'Chess', image: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/505695b9-1b21-47fd-a8e1-93345afb57de.png' },
    { id: 3, name: 'Sodoku', image: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/07/cach-choi-sudoku-didongviet-3.jpg' },
    { id: 4, name: 'Cờ Caro', image: 'https://play-lh.googleusercontent.com/fwwLv0gGho1vtcoF4sISg0vbOISYeJChqxbP7tWmmddUVD1bLUtv_U8sNb6kAptZFA' },
    { id: 5, name: 'Rắn Săn Mồi', image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/snake-game-3.jpg' },
    { id: 6, name: 'Color Blast', image: 'https://shots.codepen.io/username/pen/ExEoeZ-800.jpg?version=1407304169' },
    { id: 7, name: 'Doodle Jump', image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg' },
    { id: 8, name: 'Lật Hình', image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/07/pokemon-sleep-1.jpg' },
  ];
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