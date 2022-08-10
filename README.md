# Front End of demo project for Solicy.

This React typescript project contains 2 pages located in

`src/pages`

`Account.tsx` and `Home.tsx`

Homepage contains a table with all the accounts in the database, by clicking `View` on the account's row you will be able to navigate to the single account view page, which is `Account.tsx` and see more information about that account. You can go back by clicking `Main Page` button on account's page.

## Installation

Use `[npm]` to install all dependencies.
```bash
npm install
```

## Used libraries

The project is made using `React` and `TypeScript`.
For design, I've used the `antd`, also `styled-components` for styling the minor things and global styles.
For the back-end communication, I've used `axios`.


## Usage

To start the development server simply type

```javascript
npm run dev
```
in the terminal.

## Config
The API communication script is located at `src/hooks/api.hook.ts`
To configure node proxy for back-end connection you should use the `"proxy"` parameter in `package.json`. By default, I've set it to `http://localhost:8000` (which my back-end part uses).

## License
`Getapnya Gyux, Aeracia, Yerevan.`
