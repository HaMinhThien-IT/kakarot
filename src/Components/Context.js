import React, { Component } from 'react'
export const DataConText = React.createContext();
export class DataProvider extends Component {
    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shose 01",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf1a0ab9-a142-4d6d-937d-399152b3d9ee/jordan-delta-2-shoe-8Z0Rkk.png",
                "description": "Sang xin min",
                "price": 100,
                "content": " hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                "color": ["red", "black", "white", "blue"],
                "count": 1

            },
            {
                "_id": "2",
                "title": "Nike Shose 02",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/52dba7c6-8eb3-4636-9be7-85024df3e510/blazer-low-77-prm-shoe-pnHzBj.png",
                "description": " hihihihihihihihihihihihihihi",
                "price": 100,
                "content": " hahaahahahahahhhhhhahahaha",
                "color": ["red", "black", "white", "blue"],
                "count": 1

            },
            {
                "_id": "3",
                "title": "Nike Shose 03",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a2fe4a7-d197-474b-a5ce-7a75cfeedbe0/blazer-mid-77-se-shoe-97H9PZ.png",
                "description": " hihihihihihihihihihihihihihi",
                "price": 100,
                "content": " hahaahahahahahhhhhhahahaha",
                "color": ["red", "black", "white", "blue"],
                "count": 1

            },
            {
                "_id": "8",
                "title": "Nike Shose 04",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03d2dbab-1b43-4b80-9c38-9a27db95e7e4/air-max-95-shoe-9PVV8L.png",
                "description": " hihihihihihihihihihihihihihi",
                "price": 100,
                "content": " hahaahahahahahhhhhhahahaha",
                "color": ["red", "black", "white", "blue"],
                "count": 1

            },
            {
                "_id": "5",
                "title": "Nike Shose 05",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf1a0ab9-a142-4d6d-937d-399152b3d9ee/jordan-delta-2-shoe-8Z0Rkk.png",
                "description": " hihihihihihihihihihihihihihi",
                "price": 100,
                "content": " hahaahahahahahhhhhhahahaha",
                "color": ["red", "black", "white", "blue"],
                "count": 1

            },
            {
                "_id": "6",
                "title": "Nike Shose 06",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf1a0ab9-a142-4d6d-937d-399152b3d9ee/jordan-delta-2-shoe-8Z0Rkk.png",
                "description": " hihihihihihihihihihihihihihi",
                "price": 100,
                "content": " hahaahahahahahhhhhhahahaha",
                "color": ["red", "black", "white", "blue"],
                "count": 1

            }    ]
    }
    render() {
        const {products} = this.state;
        return (

            <DataConText.Provider value={{products}}>
                {this.props.children}
            </DataConText.Provider>

        )
    }
}


