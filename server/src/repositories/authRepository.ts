import prisma from "../config/prisma";

class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data,
    });
  }

  async updateRefreshToken(userId: string, refreshToken: string | null) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken,
      },
    });
  }
}

export default new AuthRepository();
