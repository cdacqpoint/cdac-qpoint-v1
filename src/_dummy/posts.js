import { random } from "../_helpers/random";
export default {
    init: () => {
        localStorage.setItem('questions', JSON.stringify([
            {
                _id: random(25),
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/question/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Tellus id interdum velit laoreet id donec ultrices tincidunt..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Erat imperdiet sed euismod nisi porta lorem mollis aliquam..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Morbi tristique senectus et netus et. Faucibus turpis in eu mi bibendum neque. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Consectetur adipiscing elit ut aliquam purus sit amet...',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Tempor id eu nisl nunc mi ipsum faucibus...',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Et netus et malesuada fames ac turpis egestas sed. Tincidunt eget nullam non nisi est sit amet..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Risus pretium quam vulputate dignissim suspendisse in. ',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Lectus nulla at volutpat diam ut venenatis tellus in metus..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'phasellus faucibus scelerisque eleifend...',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Enim ut tellus elementum sagittis vitae et. A diam sollicitudin tempor id eu...',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Dui accumsan sit amet nulla facilisi morbi tempus..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Magna fringilla urna porttitor rhoncus dolor. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Sed risus ultricies tristique nulla aliquet. Velit laoreet id donec ultrices tincidunt..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Donec adipiscing tristique risus nec feugiat in fermentum posuere urna...',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Quis commodo odio aenean sed. Cursus mattis molestie a iaculis. Risus pretium quam vulputate dignissim suspendisse in.',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
            {
                _id: random(25),
                title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                images: ['image.jpg'],
                category: [
                    'java',
                    'refelection'
                ],
                tag: 'DAC',
                email: '',
                author: 'Anonymous',
                authorAvatar: "../../images/avatars/noimage.png",
                commentsCount: 5,
                date_created: '2019 Dec 25 20:50:55',
                posturl: '/posts/4sg2343615a7c4821fdb7b998',
                times_ago: '2 days ago'
            },
        ]));
    }
}

