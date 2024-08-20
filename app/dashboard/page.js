import React from 'react';
import Image from 'next/image';
import '../globals.css'; // ここでグローバルスタイルを正しいパスでインポート

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f0f0f0' }}>
      {/* メニューバー */}
      <div style={{ width: '5%', backgroundColor: '#f7f7f7', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Image src="/menubar.png" alt="Menubar" layout="intrinsic" width={50} height={50} />
      </div>

#改行挿入

      {/* メインコンテンツ */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* サマリーとタイムライン */}
        <div style={{ flex: 2, padding: '20px' }}>
          {/* サマリー */}
          <div style={{ backgroundColor: '#e0f7fa', padding: '20px', marginBottom: '20px', borderRadius: '10px' }}>
            <h2>Voices Summary</h2>
            <p>ここにサマリーのテキストが入ります。</p>
          </div>

          {/* タイムライン */}
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
            <Image src="/Timeline.png" alt="Timeline" layout="responsive" width={600} height={300} />
          </div>
        </div>

        {/* スコア */}
        <div style={{ flex: 1, padding: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
            <Image src="/Score.png" alt="Score" layout="responsive" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
