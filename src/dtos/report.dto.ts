import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';

// Define a Data Transfer Object (DTO) for creating reports
export class CreateReportDto {
  @IsNumber() // Ensure the amount is a number
  @IsPositive() // Ensure the amount is a positive number
  amount: number;

  @IsString() // Ensure the source is a string
  @IsNotEmpty() // Ensure the source is not empty
  source: string;
}

// Define a Data Transfer Object (DTO) for updating reports
export class UpdateReportDto {
  @IsOptional() // The amount is optional when updating
  @IsNumber() // Ensure the amount is a number
  @IsPositive() // Ensure the amount is a positive number
  amount: number;

  @IsOptional() // The source is optional when updating
  @IsString() // Ensure the source is a string
  @IsNotEmpty() // Ensure the source is not empty
  source: string;
}

// Define a response DTO for sending report details to clients
export class ReportResponseDto {
  id: string; // Identifier for the report
  source: string; // Source of the report
  amount: number; // Amount associated with the report

  @Expose({ name: 'createdAt' }) // Expose a transformed property to clients
  transformCreatedAt() {
    return this.created_at; // Transform and expose the 'created_at' property
  }

  @Exclude() // Exclude the 'created_at' property from being sent to clients
  created_at: Date; // Timestamp when the report was created

  @Exclude() // Exclude the 'updated_at' property from being sent to clients
  updated_at: Date; // Timestamp when the report was last updated

  type: ReportType; // Type of the report (assuming 'ReportType' enum is defined)

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial); // Construct the response DTO with provided properties
  }
}
