import bcrypt from "bcrypt";

import authRepository from "../repositories/authRepository";

import { generateAccessToken } from "../config/jwt";

import AppError from "../errors/AppError";

import { HTTP_STATUS } from "../constants/httpStatus";

import { LoginDTO, RegisterDTO } from "../types/auth";

class AuthService {
  async register(data: RegisterDTO) {
    const existing = await authRepository.findByEmail(data.email);

    if (existing) {
      throw new AppError("Email already exists", HTTP_STATUS.CONFLICT);
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await authRepository.create({
      ...data,
      password: hashedPassword,
    });

    const token = generateAccessToken({
      id: user.id,
      role: user.role,
    });

    return {
      token,
      user,
    };
  }

  async login(data: LoginDTO) {
    const user = await authRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) {
      throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
    }

    const token = generateAccessToken({
      id: user.id,
      role: user.role,
    });

    return {
      token,
      user,
    };
  }
}

export default new AuthService();
