const fakeData = () => {
    return [
        {
            id: 1,
            name: 'Tetris',
            image: 'https://play-lh.googleusercontent.com/7Zn2QBzByBf4XyQPhuRVsOkSaKSYsty1ka-6_bh6Ub-2kQri6xqqRdK52qxEM69N6cw',
            target: 'Mục tiêu của Tetris là xếp các khối hình (gọi là tetrominoes) lại với nhau để tạo ra hàng ngang đầy đủ, khi đó hàng đó sẽ biến mất và bạn sẽ ghi điểm. Nhiệm vụ của bạn là giữ cho màn chơi không bị tràn đầy bằng cách xóa hàng thường xuyên.',
            key: `
              Di chuyển tetromino xuống: Dùng phím mũi tên xuống
              Di chuyển tetromino sang trái: Dùng phím mũi tên trái
              Di chuyển tetromino sang phải: Dùng phím mũi tên phải
              Xoay tetromino: Dùng phím cách`,
            how: `Game bắt đầu với một tetromino rơi từ trên xuống. Sử dụng các phím di chuyển để điều khiển tetromino rơi và quay.
               Hãy cố gắng xếp các tetromino lại với nhau để tạo thành các hàng ngang đầy đủ.
               Một khi bạn đã hoàn thành một hàng, nó sẽ biến mất và bạn sẽ được thưởng điểm.
               Hãy cố gắng chơi càng lâu càng tốt bằng cách xóa nhiều hàng nhất có thể và không để màn hình bị đầy.
               Game kết thúc khi không còn không gian để để tetromino mới hoặc khi bạn không thể xếp chúng lại với nhau một cách hiệu quả.`,
            link: '../store/Web-Game-tetris/index.html'
        }
        ,
        {
            id: 2,
            name: 'Chess',
            image: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/505695b9-1b21-47fd-a8e1-93345afb57de.png',
            target: 'Mục tiêu của game là chiếu và ăn được cờ vua của đối thủ.',
            key: `Dùng Chuột Di Chuyển Quân Cờ`,
            how: `Mỗi quân cờ có cách di chuyển riêng, như sau:
            Vua: có thể di chuyển một ô bất kỳ theo bất kỳ hướng nào.
            Hậu: có thể di chuyển bất kỳ số ô theo bất kỳ hướng nào.
            Xe: có thể di chuyển bất kỳ số ô theo hàng ngang hoặc dọc.
            Tượng: có thể di chuyển bất kỳ số ô theo đường chéo.
            Mã: có thể di chuyển hai ô theo một hướng bất kỳ, sau đó di chuyển một ô theo hướng vuông góc với hướng ban đầu.
            Tốt: có thể di chuyển một ô về phía trước. Trong lần di chuyển đầu tiên, tốt có thể di chuyển hai ô về phía trước. Tốt có thể bắt quân đối phương ở ô chéo ngay trước nó.`,
            link: '../store/Web-Game-chessgame/index.html'

        },
        {
            id: 3,
            name: 'Sodoku',
            image: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/07/cach-choi-sudoku-didongviet-3.jpg',
            target: ``,
            key: ``,
            how: ``,
            link: '../store/Web-Game-sodokugame/index.html'
        },
        {
            id: 4,
            name: 'Cờ Caro',
            image: 'https://play-lh.googleusercontent.com/fwwLv0gGho1vtcoF4sISg0vbOISYeJChqxbP7tWmmddUVD1bLUtv_U8sNb6kAptZFA',
            target: ``,
            key: ``,
            how: ``,
            link: '../store/Web-Game-c-caro/index.html'
        },
        {
            id: 5, name: 'Rắn Săn Mồi',
            image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/snake-game-3.jpg',
            target: 'Rắn săn mồi là một trò chơi giải trí phổ biến. Người chơi cố gắng điều khiển con rắn để ăn thật nhiều thức ăn và tránh va vào tường hoặc chính bản thân mình. Trò chơi này có tính giải trí cao và giúp người chơi giải tỏa căng thẳng.',
            key: `
         Sử dụng các phím mũi tên (lên, xuống, trái, phải) trên máy tính của bạn để điều khiển hướng di chuyển của con rắn.`,
            how: `Đầu tiên bạn cần điều khiển con rắn để ăn thức ăn (được biểu thị bằng các viên mồi). Khi con rắn ăn một viên mồi, nó sẽ trở nên dài hơn một phần. Bạn cần linh hoạt giúp con rắn của bạn tránh va vào tường hoặc tự đâm vào mình. Nếu làm như vậy, bạn sẽ thua và game kết thúc. Nhiệm vụ là duy trì sự sống của con rắn càng lâu càng tốt và làm cho nó dài hơn.
          Game sẽ tính điểm dựa trên số viên mồi bạn đã ăn và chiều dài của con rắn. Thường game sẽ trở nên khó hơn khi con rắn trở nên dài hơn và tốc độ di chuyển tăng lên.`,
            link: '../store/Web-Game-R-n-s-n-m-i/index.html'
        },
        {
            id: 6,
            name: 'Color Blast',
            image: 'https://shots.codepen.io/username/pen/ExEoeZ-800.jpg?version=1407304169',
            target: 'Mục tiêu chính của trò chơi "Color Blast" là ghi điểm cao nhất bằng cách bắn phá các thanh màu sắc trên màn hình và chơi một cách cẩn thận để tránh những viên đạn màu sắc rơi vào người chơi.',
            key: `
        Sử dụng phím mũi tên trái và phải hoặc phím A và D để di chuyển người chơi sang trái và phải trên màn hình.
        Sử dụng phím Space hoặc phím Enter để bắn phá các thanh màu sắc.`,
            how: `Quản lí thời gian và Điểm số
         Ban đầu khi bắt đầu vào màn hình chính game, sẽ có 3 lượt chơi. Khi những thanh màu sắc rơi vào người chơi, lúc đó bạn sẽ bị trừ 1 lượt chơi và cho đến khi hết lượt
         Điểm số được tính bằng cách mỗi lần người chơi bắn 1 thanh màu nổ tung thì điểm số sẽ được tăng 15
         Cách thắng và thua
         Color Blast là một game không có cách thắng cụ thể, mục tiêu là ghi điểm cao nhất có thể. Bạn sẽ thua cuộc nếu bạn hết lượt chơi.
         Vậy nên hãy làm mới điểm số của mình thật cao nhé!!
         Làm mới trò chơi
         Nếu bạn thua cuộc hoặc muốn chơi lại, hãy nhấn phím Space hoặc chuột để khởi động lại trò chơi.
         Trò chơi "Color Blast" là một trò chơi thú vị nơi bạn cần sử dụng sự tư duy và khả năng nhạy bén để ghi điểm cao. Chúc bạn chơi thật vuiii!!`,
            link: '../store/Web-Game-Color-Blast/index.html'
        },
        {
            id: 7,
            name: 'Doodle Jump',
            image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg',
            target: ``,
            key: ``,
            how: ``,
            link: '../store/Web-Game-Doodle-Jump/index.html'
        },
        {
            id: 8, name: 'Lật Hình',
            image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/07/pokemon-sleep-1.jpg',
            target: `Game "Flip Flop" có thể có nhiều biến thể khác nhau, nhưng ở đây chúng tôi giới thiệu cách chơi một phiên bản đơn giản của trò chơi này. Trò chơi này cũng được gọi là "Memory Game" hoặc "Matching Game". Mục tiêu chính của trò chơi là tìm các cặp thẻ giống nhau trong một bộ thẻ đã được đặt ngửa. Dưới đây là hướng dẫn chi tiết:`,
            key: `Dùng Chuột Để Điều Khiển`,
            how: `Bước 1: Chuẩn bị bộ thẻ

            Bắt đầu trò chơi sẽ có một bộ thẻ được up lại một cách ngẫu nhiên.
            Bước 2: Lật thẻ
            2. Lật hai thẻ bất kỳ lên để xem hình ảnh ẩn bên dưới. Mục tiêu là tìm hai thẻ giống nhau.
            
            Bước 3: Tìm cặp thẻ
            3. Nếu bạn tìm thấy hai thẻ có hình giống nhau, chúng sẽ luôn được hiển thị mặt có hình ảnh lên màn hình.
            
            Bước 4: Nếu thẻ không khớp
            4. Nếu bạn lật hai thẻ mà hình không giống nhau,chúng sẽ được up lại và hãy tiếp tục lật các thẻ khác.
            
            Bước 5: Lật thẻ tiếp theo
            5. Lật thêm hai thẻ khác và tiếp tục quá trình tìm cặp thẻ cho đến khi tất cả các cặp được tìm thấy.
            
            Bước 6: Kết thúc trò chơi
            6. Trò chơi kết thúc khi tất cả các cặp thẻ được tìm thấy. Người chơi có thể thử hoàn thành trò chơi trong thời gian ngắn nhất hoặc với số lần lật thẻ ít nhất.
            
            Trò chơi này là một cách tuyệt vời để cải thiện khả năng tập trung và trí nhớ. Bạn có thể chơi một mình hoặc mời bạn bè và gia đình tham gia để tạo thêm niềm vui và cạnh tranh.`,
            link: '../store/Web-Game-Flip-Flop/FlipFlop.html'
        },
    ]

}
export default fakeData