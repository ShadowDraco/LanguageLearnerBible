import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        magnam, quia, nobis maxime iusto debitis nisi alias a aut doloribus quam
        temporibus iste consequuntur distinctio suscipit, veritatis architecto
        dignissimos praesentium eum. Maiores dolores, voluptas, consequatur
        repudiandae dolor, id accusamus doloribus obcaecati nam inventore
      </p>
      <Link href={'/bible'}>Bible Page</Link>
    </main>
  );
}
