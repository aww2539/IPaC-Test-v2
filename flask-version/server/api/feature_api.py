from flask import request, jsonify
from flask_restful import Resource
from database.connect import connect_to_db
from models import Feature


class FeatureList(Resource):
    def get(self):
        with connect_to_db() as db_conn:
            with db_conn.cursor() as cursor:
                category_sid = request.args.get('category_sid')
                print(category_sid)

                if category_sid:
                    sql = ("SELECT * "
                           "FROM features f "
                           f"WHERE f.category_sid = {category_sid} "
                           "AND f.is_deleted = false "
                           "ORDER BY f.display_name ASC")
                    cursor.execute(sql)
                    results = cursor.fetchall()
                    cursor.close()

                    features = [Feature(*row) for row in results]
                    return jsonify([feature.__dict__ for feature in features])
                

                # Default
                sql = ("SELECT * "
                        "FROM features f "
                        "WHERE f.is_deleted = false "
                        "ORDER BY f.display_name ASC")
                cursor.execute(sql)
                results = cursor.fetchall()
                cursor.close()

                features = [Feature(*row) for row in results]
                return jsonify([feature.__dict__ for feature in features])