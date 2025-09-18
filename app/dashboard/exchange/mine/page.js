import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ExchangeCom from '@/components/Exchange/ExchangeCom';
import Exchange from '@/models/exchange.model';
import { connect } from '@/models/mongodb';
import { getServerSession } from 'next-auth';


const page = async () => {
  const session = await getServerSession(authOptions);
  await connect()
  const exchanges = await Exchange.find({idUser: session?.user?._id}) // Fetch exchanges for the logged-in user
  .populate('idPharmacy') // Populate pharmacy details (only 'name' field)
  .populate('idUser') // Populate user details (only 'username' field)
  .populate('toOffer') // Populate the products in `toOffer`
  .populate('toGet').lean() // Populate the products in `toGet`

  return (
    <ExchangeCom from={"mine"} exchanges={JSON.stringify(exchanges)} />
  )
}

export default page