"use client"; // これを追加することで、このファイルがクライアントコンポーネントとして扱われます。

import React, { useState } from 'react';
import '../globals.css'; // 上の階層にある globals.css を参照

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-box">
        {/* ロゴを表示 */}
        <img src="/logo.png" alt="Voices Logo" className="logo" />
        <h2>ログイン</h2>
        <label htmlFor="email">Eメールアドレス</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>ログイン</button>
      </div>
    </div>
  );
}

export default Login;
