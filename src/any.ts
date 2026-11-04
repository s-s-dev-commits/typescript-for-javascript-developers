import axios from 'axios';

export {};

// let url: string =
//   'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles';

axios
  .get(url, {
    params: {
      token: 'token123',
    },
    timeout: 5000, // 5 seconds. See "Handling Timeouts" below for matching error handling
  })
  .then(function (response) {
    interface Article {
      id: number;
      titel: string;
      discription: string;
    }
    let data: any = response.data;
    data = [
      {
        id: 1,
        // titel: 'title',
        discription: 'discription',
      },
    ];
    // let data: Article[] = response.data;
    // data = [
    //   {
    //     id: 1,
    //     titel: 'title',
    //     discription: 'discription',
    //   },
    // ];
    console.log(data);
  });
