from flask import request, jsonify
from flask_restful import Resource
from database.connect import connect_to_db
from models import Category

class CategoryList(Resource):
    def get(self):
        with connect_to_db() as db_conn:
            with db_conn.cursor() as cursor:
                category_id = request.args.get('id')
                print(category_id)

                if category_id:
                    sql = ("SELECT * "
                           "FROM categories c "
                           "WHERE c.name NOT LIKE '%DEPRECATED%' "
                           f"AND c.id = {category_id}")
                    cursor.execute(sql)
                    result = cursor.fetchone()
                    cursor.close()

                    if result:
                        category = Category(*result)
                        return jsonify(category.__dict__)
                    else:
                        return {}, 404
                
                # Default
                sql = ("SELECT * "
                        "FROM categories c "
                        "WHERE c.name NOT LIKE '%DEPRECATED%' "
                        "ORDER BY c.sort_order")
                cursor.execute(sql)
                results = cursor.fetchall()
                cursor.close()

                categories = [Category(*row) for row in results]
                return jsonify([category.__dict__ for category in categories])