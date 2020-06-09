# Environment Config

### List of env variables

    "set-dev": "shx echo \"export default 'dev';\"> active.env.js",
    "set-stage": "shx echo \"export default 'staging';\"> active.env.js",
    "set-qa": "shx echo \"export default 'qa';\"> active.env.js",
    "set-release": "shx echo \"export default 'release';\"> active.env.js"

### Change environment example


```bash
npm run set-dev
```

## Usage

```javascript
//To use te environment variables import the env file in your component
import API from "../../config/env";

//and reference it
console.log(API.admin)

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)