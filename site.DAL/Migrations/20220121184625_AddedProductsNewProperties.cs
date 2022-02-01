using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace site.DAL.Migrations
{
    public partial class AddedProductsNewProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Products",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Products",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Orders",
                type: "datetime",
                nullable: false,
                defaultValue: new DateTime(2022, 1, 21, 20, 46, 25, 479, DateTimeKind.Local).AddTicks(5280),
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldDefaultValue: new DateTime(2022, 1, 21, 1, 37, 48, 904, DateTimeKind.Local).AddTicks(3560));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Products");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Orders",
                type: "datetime",
                nullable: false,
                defaultValue: new DateTime(2022, 1, 21, 1, 37, 48, 904, DateTimeKind.Local).AddTicks(3560),
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldDefaultValue: new DateTime(2022, 1, 21, 20, 46, 25, 479, DateTimeKind.Local).AddTicks(5280));
        }
    }
}
