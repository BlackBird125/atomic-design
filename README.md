# アトミックデザインによる React コンポーネント設計

このプロジェクトは、アトミックデザインの原則に基づいて React コンポーネントを設計・実装する方法を学ぶためのサンプルアプリケーションです。

## アトミックデザインとは

アトミックデザインは、UI コンポーネントを以下の 5 つの階層に分類する設計手法です：

1. Atoms（原子）
2. Molecules（分子）
3. Organisms（有機体）
4. Templates（テンプレート）
5. Pages（ページ）

このプロジェクトでは、シンプルなログイン画面を例に、主に Atoms、Molecules、Pages の 3 つの層を実装しています。

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/
│   │   ├── TextInput.tsx    // 基本的な入力フィールド
│   │   └── PrimaryButton.tsx // 基本的なボタン
│   └── molecules/
│       └── LoginForm.tsx    // 入力フィールドとボタンを組み合わせたフォーム
└── pages/
    └── LoginPage.tsx       // ログインページ全体
```

## コンポーネント階層

### 1. Atoms（原子）

最小単位の UI コンポーネント：

- **TextInput**

  ```tsx
  <TextInput label="ユーザー名" value={username} onChange={handleChange} />
  ```

- **PrimaryButton**
  ```tsx
  <PrimaryButton onClick={handleClick}>ログイン</PrimaryButton>
  ```

### 2. Molecules（分子）

Atoms を組み合わせた機能単位：

- **LoginForm**
  ```tsx
  <LoginForm onSubmit={handleLogin} />
  ```

### 3. Pages（ページ）

完全なページを構成：

- **LoginPage**
  ```tsx
  <LoginPage />
  ```

## 技術スタック

- React 18
- TypeScript
- Material-UI (MUI)
- アトミックデザイン

## セットアップ方法

1. 依存パッケージのインストール:

```bash
npm install
```

2. 開発サーバーの起動:

```bash
npm start
```

アプリケーションは http://localhost:3000 で起動します。

## アトミックデザインの利点

1. **再利用性**

   - 小さなコンポーネントを組み合わせて大きなコンポーネントを作成
   - 共通の UI パーツを効率的に管理

2. **保守性**

   - 責任範囲が明確
   - コンポーネントの依存関係が分かりやすい

3. **開発効率**
   - コンポーネントの役割が明確
   - チーム開発での共通理解が容易

## 実装のポイント

1. **Atoms（原子）レベルの設計**

   - 最小限の機能に限定
   - 汎用的な使用が可能
   - props による柔軟なカスタマイズ

2. **Molecules（分子）レベルの設計**

   - 特定の目的のための機能単位
   - 状態管理の実装
   - イベントハンドリング

3. **Pages（ページ）レベルの設計**
   - レイアウトの定義
   - ページ全体の状態管理
   - ビジネスロジックの実装

## 学習ポイント

1. **コンポーネントの分割基準**

   - 単一責任の原則
   - 再利用性の考慮
   - 適切な粒度の決定

2. **型定義**

   - インターフェースの設計
   - プロップスの型安全性
   - 再利用可能な型定義

3. **状態管理**
   - 適切なレベルでの状態管理
   - プロップスバケツリレーの防止
   - イベントハンドリングの設計

## 注意点

- コンポーネントの責任範囲を明確に
- 過度な分割は避ける
- 適切な粒度でのコンポーネント設計を心がける

## 参考リンク

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Material-UI Documentation](https://mui.com/)
- [React Documentation](https://react.dev/)
