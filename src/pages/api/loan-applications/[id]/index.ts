import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { loanApplicationValidationSchema } from 'validationSchema/loan-applications';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.loan_application
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLoanApplicationById();
    case 'PUT':
      return updateLoanApplicationById();
    case 'DELETE':
      return deleteLoanApplicationById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLoanApplicationById() {
    const data = await prisma.loan_application.findFirst(convertQueryToPrismaUtil(req.query, 'loan_application'));
    return res.status(200).json(data);
  }

  async function updateLoanApplicationById() {
    await loanApplicationValidationSchema.validate(req.body);
    const data = await prisma.loan_application.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLoanApplicationById() {
    const data = await prisma.loan_application.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
