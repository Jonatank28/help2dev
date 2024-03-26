import login from '@/assets/projects/next_auth/login.png'
import login_light from '@/assets/projects/next_auth/login-light.png'
import signUp from '@/assets/projects/next_auth/signUp.png'
import signUp_light from '@/assets/projects/next_auth/signUp-light.png'

export const projects = [
  {
    "id": 1946,
    "title": "Next Auth",
    "titlePath": "next-auth",
    "description": {
      ["pt"]: "Projeto desenvolvido com Next.js 14, Tailwind CSS, Next UI e NextAuth.js representa a integração de tecnologias modernas para a criação de aplicações web robustas e visualmente atraentes. O Next.js 14 fornece uma estrutura sólida para o desenvolvimento de aplicações React, enquanto o Tailwind CSS facilita a estilização com uma abordagem baseada em classes. Com o Next UI, o desenvolvimento é agilizado através de componentes UI prontos para uso. Além disso, o NextAuth.js simplifica a autenticação do usuário, permitindo o login através de provedores populares como Google, GitHub e credenciais próprias. Essas tecnologias combinadas oferecem uma experiência de desenvolvimento moderna e eficiente.",
      ["en"]: "Project developed with Next.js 14, Tailwind CSS, Next UI, and NextAuth.js represents the integration of modern technologies for the creation of robust and visually appealing web applications. Next.js 14 provides a solid structure for developing React applications, while Tailwind CSS facilitates styling with a class-based approach. With Next UI, development is streamlined through ready-to-use UI components. Additionally, NextAuth.js simplifies user authentication, allowing login through popular providers such as Google, GitHub, and custom credentials. These combined technologies offer a modern and efficient development experience.",
      ["es"]: "Proyecto desarrollado con Next.js 14, Tailwind CSS, Next UI y NextAuth.js que representa la integración de tecnologías modernas para la creación de aplicaciones web robustas y visualmente atractivas. Next.js 14 proporciona una estructura sólida para el desarrollo de aplicaciones React, mientras que Tailwind CSS facilita la estilización con un enfoque basado en clases. Con Next UI, el desarrollo se agiliza a través de componentes UI listos para usar. Además, NextAuth.js simplifica la autenticación de usuarios, permitiendo el inicio de sesión a través de proveedores populares como Google, GitHub y credenciales personalizadas. Estas tecnologías combinadas ofrecen una experiencia de desarrollo moderna y eficiente."
    },
    "images": [
      login,
      login_light,
      signUp,
      signUp_light
    ],
    "tecs": [
      "Next 14",
      "Tailwind",
      "Next UI",
      "NextAuth"
    ],
    "links": {
      "github": "https://github.com/Jonatank28/fr_next_auth_google_github-credentials",
      "build": "https://fr-next-auth.vercel.app"
    }
  },
]