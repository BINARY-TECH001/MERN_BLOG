import './singlePost.css'

import ImgPost from '../../assets/4.jpg'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={ImgPost} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <FaRegEdit className="icon singlePostIcon" />
            <RiDeleteBin5Line className='delete singlePostIcon'/>
          </div>
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor"> Author: <b className='name'>Ademola</b> </span>
            <i className="singlePostDate"> 1 hour ago </i>
        </div>

        <p className='singlePostDesc'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium dolor esse cumque, rerum consectetur distinctio ipsam in voluptatem iusto. Id porro quaerat, laboriosam tenetur vitae recusandae doloribus minima perferendis.
        Esse sed repudiandae odio porro obcaecati nulla quae, voluptas, molestiae ullam dicta ab! Quas harum qui error unde. Enim eaque unde quibusdam excepturi est quis rerum quas veritatis, labore quia?
        Voluptas optio tempora, ducimus accusamus illum, magni suscipit qui impedit maiores blanditiis enim excepturi. Vel vitae provident enim maxime aliquid, expedita culpa autem porro eius. Ullam et magnam provident neque!
        Quod, ab quia! Rerum vero nesciunt odio saepe aliquid! Quas commodi nihil ipsum? Libero iste harum quae. Animi deserunt neque nobis est deleniti! Fugiat possimus veritatis consectetur autem ipsum quam?
        Voluptatibus facere doloribus deleniti debitis nemo quod inventore fugiat amet. Cum nesciunt nemo quasi fuga exercitationem! Dolores totam incidunt debitis ipsum suscipit tempora? Sed, ipsa laboriosam sint atque modi eveniet.
        Error, nesciunt at nobis provident totam assumenda nisi libero illo soluta ea obcaecati. Mollitia, molestiae facere! Iusto laborum in minus nobis quaerat officiis possimus mollitia tenetur, vel, atque expedita eius.
        Necessitatibus molestiae quos exercitationem, illum nihil quae libero officia cum animi porro et ipsam dolores ullam atque accusantium dolorum assumenda voluptates reiciendis distinctio itaque pariatur. Est voluptatem suscipit delectus! Tempore.
        Perferendis aliquam, et illum saepe repellat consequuntur veniam laboriosam dolor aliquid, quam tempore, sunt repellendus soluta molestias deleniti nihil commodi aut magnam quia eum esse molestiae at culpa! Expedita, impedit.
        Animi eaque rerum accusamus aliquam, id nam voluptas inventore culpa corporis dolor voluptatibus illo doloribus, cupiditate eos nobis quas voluptatum dicta unde quo reiciendis exercitationem! Perferendis nisi earum nesciunt sequi?
        Nesciunt beatae voluptatibus reprehenderit veritatis ex praesentium! Expedita ratione aut atque ex, explicabo placeat facere sint debitis tenetur sit saepe nulla eos, eveniet dolores fugit distinctio maxime numquam libero exercitationem!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed veniam odio blanditiis deleniti, excepturi cum voluptas fuga quisquam iusto consequatur! Perferendis, delectus illo? Rem cupiditate autem illum provident nesciunt.
        Possimus aliquam consequuntur voluptate rerum cum sapiente! Corporis vero qui asperiores, soluta quae commodi neque esse unde est porro blanditiis exercitationem, at dicta laboriosam, hic eius quasi quo culpa accusamus.
        Rerum minus quaerat velit debitis vitae necessitatibus excepturi atque similique illum, enim repellat veritatis id! Pariatur, beatae? Explicabo optio vitae, laboriosam omnis assumenda quod quam sunt expedita nobis mollitia quos.
        Iste, voluptatem nulla veniam similique repellendus eum totam, saepe fugit cupiditate ut, quaerat quasi consequatur. Repudiandae similique laborum sit quis numquam mollitia aperiam eveniet dignissimos quos id exercitationem, vitae dolore.



        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore delectus eos provident! Optio quibusdam illo vel, debitis quaerat, accusamus commodi totam dolore, numquam inventore voluptatibus. Quia sunt ex illum.
        Quam possimus minus, ad officia nam delectus amet veritatis tenetur aliquam minima! Quae deserunt sit eaque odio eos ratione amet maxime, obcaecati reiciendis cum dignissimos dolores animi debitis odit praesentium!
        Distinctio eligendi sapiente delectus omnis at. Ratione quisquam distinctio incidunt numquam quidem quasi, harum doloribus, facilis eveniet sapiente iure, quo mollitia voluptas. Odio quaerat dolorem quo debitis officiis molestiae ut.
        Soluta repellat odio eligendi excepturi voluptas sit deserunt, aspernatur hic. Expedita, possimus. Nobis delectus molestiae nisi, nam in culpa, aut magni molestias eaque maxime, sit ad autem. Deleniti, dolor! Explicabo?
        Dolorum tempore voluptates magni obcaecati, ex pariatur explicabo neque cumque molestias, quae repellendus dicta quidem nihil doloremque perspiciatis. Voluptatibus assumenda temporibus vitae atque pariatur quo quibusdam culpa fugiat dolorem eveniet!
        Fugiat nam ducimus optio voluptate possimus nemo incidunt? Nostrum, nam eius nulla nesciunt, ab ut eveniet consectetur at obcaecati commodi voluptatem sint minima natus harum nobis dolorum ad? Vitae, placeat!
         </p>
      </div>
    </div>
  )
}

export default SinglePost
